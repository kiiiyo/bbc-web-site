import { FC } from 'react'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'
import type { TLanguage } from '@/types/language'
import type { TLocale } from '@/types/locale'

type State = {
  language: TLanguage
  locale: TLocale
}

export type TBearSinglePageProps = {
  state: State
}

export const BearSinglePagePresenter: FC<TBearSinglePageProps> = ({ state: { language }, children }) => {
  return (
    <>
      <Head>
        <title>
          {language.page.homePage.title} - {Constants.SITE_TITLE}
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
                    <span className="inline-block mr-3">🐻</span>
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                      {language.page.aboutPage.hero.title}
                    </span>
                  </>
                ),
                description: language.page.aboutPage.hero.description
              }}
            />
            <div className="container p-6 mx-auto ">
              <div className="pb-20">{children}</div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const BearSinglePage: FC = ({ children }) => {
  const {
    state: { language, locale }
  } = Hooks.Locale.useLocaleContext()

  return (
    <BearSinglePagePresenter
      state={{
        language,
        locale
      }}
    >
      {children}
    </BearSinglePagePresenter>
  )
}

export default BearSinglePage
