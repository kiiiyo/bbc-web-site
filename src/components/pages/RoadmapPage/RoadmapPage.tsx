import { FC } from 'react'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'

type State = {
  language: TLanguage
}

export type RoadmapPagePresenterProps = {
  state: State
}

export const RoadmapPagePresenter: FC<RoadmapPagePresenterProps> = ({ state: { language } }) => {
  return (
    <>
      <Head>
        <title>
          {language.page.roadmapPage.title} - {Constants.SITE_TITLE}
        </title>
      </Head>
      <Templates.GenericTemplate
        state={{
          globalHeader: <Organisms.Header />,
          globalFooter: <Organisms.Footer />,
          overlayMenu: <Organisms.OverlayMenu />
        }}
      >
        <section>
          <div className=" bg-slate-50">
            <Organisms.Hero
              state={{
                title: (
                  <>
                    <span className="inline-block mr-3">🏃</span>
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                      {language.page.roadmapPage.hero.title}
                    </span>
                  </>
                ),
                description: language.page.roadmapPage.hero.description
              }}
            />
            <div className="container px-6 mx-auto ">
              <div className="pb-20">
                <Organisms.RoadmapSection />
              </div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const RoadmapPage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return (
    <RoadmapPagePresenter
      state={{
        language
      }}
    />
  )
}

export default RoadmapPage
