import { FC } from 'react'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { Hooks } from '@/features'
import { Templates, Organisms, Molecules } from '@/components'
import type { TLanguage } from '@/types/language'

type State = {
  language: TLanguage
}

export type AboutPageProps = {
  state: State
}

export const AboutPagePresenter: FC<AboutPageProps> = ({ state: { language } }) => {
  return (
    <>
      <Head>
        <title>
          {language.page.aboutPage.title} - {Constants.SITE_TITLE}
        </title>
      </Head>
      <Templates.GenericTemplate
        globalHeader={<Organisms.Header />}
        globalFooter={<Organisms.Footer />}
        OverlayMenu={<Organisms.OverlayMenu />}
      >
        <section>
          <div className=" bg-slate-50">
            <Organisms.Hero
              state={{
                title: (
                  <>
                    <span className="inline-block mr-3">🐻</span>
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                      {language.page.aboutPage.hero.title}
                    </span>
                  </>
                ),
                description: language.page.aboutPage.hero.description
              }}
            />
            <div className="container px-6 mx-auto ">
              <div className="pb-20">
                <Molecules.AboutNeo />
                <Molecules.AboutMoo />
                <Molecules.AboutSmith />
                <Molecules.AboutOracle />
              </div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const AboutPage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return (
    <AboutPagePresenter
      state={{
        language
      }}
    />
  )
}

export default AboutPage
