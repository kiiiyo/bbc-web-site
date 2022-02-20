import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Hooks, Domain } from '@/features'
//import { Atoms } from '@/components'
//
import type { TLocale } from '@/types/locale'

export type TMoreBearCollectionProps = {
  state: {
    collection: Domain.Bear.TCollection
  }
}

export type TMoreBearCollectionPresenterProps = {
  state: {
    locale: TLocale
    collection: Domain.Bear.TCollection
  }
}

export const MoreBearCollectionPresenter: FC<TMoreBearCollectionPresenterProps> = ({
  state: { locale, collection }
}) => {
  return (
    <section>
      <div className="mt-8">
        <h1 className="text-xl font-bold lg:text-3xl">BitBear&#39;s</h1>
      </div>

      <div className="flex flex-wrap -m-4 mt-2">
        {collection &&
          collection.items.length > 0 &&
          collection.items.map((item: Domain.Bear.TEntity, index: number) => {
            const { slug, keyVisualImage, name } = item

            return (
              <React.Fragment key={index}>
                <Link href={`/${locale}/bears/${slug}`}>
                  <a className="block p-3 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <div className="overflow-hidden h-full rounded-2xl border-2 border-gray-200">
                      <Image
                        alt={`Bear Name ${name}`}
                        src={keyVisualImage.url}
                        layout={'responsive'}
                        className="rounded-md rounded-b-none"
                        width={960}
                        height={960}
                      />

                      <div className="p-4 text-center">
                        <h2 className="text-xs font-medium tracking-widest text-gray-600">🐻 NAME</h2>
                        <h1 className="mt-2 font-bold text-gray-800 lg:text-lg">{name}</h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </React.Fragment>
            )
          })}
      </div>
    </section>
  )
}

export const MoreBearCollection: FC<TMoreBearCollectionProps> = ({ state: { collection } }) => {
  const {
    state: { locale }
  } = Hooks.Locale.useLocaleContext()

  const localeState = locale || 'ja'
  return (
    <MoreBearCollectionPresenter
      state={{
        locale: localeState,
        collection
      }}
    />
  )
}

export default MoreBearCollection
