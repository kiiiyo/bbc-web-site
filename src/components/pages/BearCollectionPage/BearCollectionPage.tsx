import React, { FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
//
import { Constants } from '@/env'
import { Hooks, Domain } from '@/features'
import { Templates, Organisms } from '@/components'
import type { TLanguage } from '@/types/language'
import type { TLocale } from '@/types/locale'

export type TBearCollectionPageProps = {
  state: {
    collection: Domain.Bear.TCollection | null
  }
}

export type TBearCollectionPagePresenterProps = {
  state: {
    language: TLanguage
    locale: TLocale
    collection: Domain.Bear.TCollection | null
  }
}

export const BearCollectionPagePresenter: FC<TBearCollectionPagePresenterProps> = ({
  state: { language, locale, collection }
}) => {
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
                  {collection &&
                    collection.items.length > 0 &&
                    collection.items.map((item: Domain.Bear.TEntity, index: number) => {
                      const { slug, keyVisualImage, name } = item

                      return (
                        <React.Fragment key={index}>
                          <Link href={`/${locale}/bears/${slug}`}>
                            <a className="block p-4 w-full md:w-1/3">
                              <div className="overflow-hidden h-full rounded-2xl border-2 border-gray-200">
                                <Image
                                  alt={`Bear Name ${name}`}
                                  className="rounded-lg"
                                  src={keyVisualImage.url}
                                  layout={'responsive'}
                                  width={960}
                                  height={960}
                                />

                                <div className="p-6">
                                  <h2 className="text-xs font-medium tracking-widest text-gray-600">🐻 NAME</h2>
                                  <h1 className="mt-4 text-xl font-bold text-gray-900 lg:text-3xl">{name}</h1>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </React.Fragment>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const BearCollectionPage: FC<TBearCollectionPageProps> = ({ state: { collection } }) => {
  const {
    state: { language, locale }
  } = Hooks.Locale.useLocaleContext()

  return (
    <BearCollectionPagePresenter
      state={{
        locale,
        collection,
        language
      }}
    />
  )
}

export default BearCollectionPage
