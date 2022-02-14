import { FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'
import type { TLanguage } from '@/types/language'

type State = {
  language: TLanguage
}

export type TBearsPageProps = {
  state: State
}

export const BearsPagePresenter: FC<TBearsPageProps> = ({ state: { language } }) => {
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
              <div className="pb-20">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="overflow-hidden h-full rounded-lg border-2 border-gray-200 border-opacity-60">
                      <Image
                        alt="Bear Name Moo"
                        className="rounded-lg"
                        src="/assets/images/body-moo.png"
                        layout={'responsive'}
                        width={960}
                        height={960}
                      />

                      <div className="p-6">
                        <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">CATEGORY</h2>
                        <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h1>
                        <p className="mb-3 leading-relaxed">
                          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex flex-wrap items-center">
                          <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              className="ml-2 w-4 h-4"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span className="inline-flex items-center py-1 pr-3 mr-3 ml-auto text-sm leading-none text-gray-400 border-r-2 border-gray-200 md:ml-0 lg:ml-auto">
                            <svg
                              className="mr-1 w-4 h-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="inline-flex items-center text-sm leading-none text-gray-400">
                            <svg
                              className="mr-1 w-4 h-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const BearsPage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return (
    <BearsPagePresenter
      state={{
        language
      }}
    />
  )
}

export default BearsPage
