import { FC } from 'react'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'

export type TFindPageProps = {
  state: {
    language: TLanguage
  }
}

export const FindPagePresenter: FC<TFindPageProps> = ({ state: { language } }) => {
  return (
    <>
      <Head>
        <title>
          {language.page.findPage.title} - {Constants.SITE_TITLE}
        </title>
      </Head>

      <Templates.GenericTemplate
        globalHeader={<Organisms.Header />}
        globalFooter={<Organisms.Footer />}
        OverlayMenu={<Organisms.OverlayMenu />}
      >
        <Organisms.Hero
          state={{
            title: (
              <>
                <span className="inline-block mr-3">🔍</span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                  {language.page.findPage.hero.title}
                </span>
              </>
            ),
            description: language.page.findPage.hero.description
          }}
        />
        <Organisms.FindSection />
      </Templates.GenericTemplate>
    </>
  )
}

export const FindPage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return <FindPagePresenter state={{ language }} />
}

export default FindPage
