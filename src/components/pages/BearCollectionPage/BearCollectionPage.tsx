import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

export type TBearCollectionPageProps = {
  state: State
}

export const BearCollectionPagePresenter: FC<TBearCollectionPageProps> = ({ state: { language, locale } }) => {
  return (
    <>
      <Head>
        <title>
          {language.page.aboutPage.title} - {Constants.SITE_TITLE}
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
                  <div className="p-4 md:w-1/4">
                    <Link href={`/${locale}/bears/neo`}>
                      <a>
                        <div className="overflow-hidden h-full rounded-lg border-2 border-gray-200">
                          <Image
                            alt="Bear Name Neo"
                            className="rounded-lg"
                            src="/assets/images/body-neo.png"
                            layout={'responsive'}
                            width={960}
                            height={960}
                          />

                          <div className="p-6">
                            <h2 className="text-xs text-gray-600">🐻 Name</h2>
                            <h1 className="mt-4 text-xl font-bold text-gray-900 md:text-3xl">
                              {language.page.aboutPage.section.neo.name}
                            </h1>
                          </div>
                        </div>
                      </a>
                    </Link>
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

export const BearCollectionPage: FC = () => {
  const {
    state: { language, locale }
  } = Hooks.Locale.useLocaleContext()

  return (
    <BearCollectionPagePresenter
      state={{
        language,
        locale
      }}
    />
  )
}

export default BearCollectionPage
