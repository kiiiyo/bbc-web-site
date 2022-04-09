import { FC, Key, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//
import { Constants } from '@/env'
import { Hooks, Domain } from '@/features'
import { Templates, Organisms, Molecules } from '@/components'
import { SendLinkClckTrigger } from '@/utils/gtm'
import type { TLocale } from '@/types/locale'

export type TLinkItem = {
  pageType?: string
  linkId?: string
  link: string
}

export type TBearSinglePageProps = {
  state: {
    collection: Domain.Bear.TCollection | null
    bear: Domain.Bear.TEntity
  }
}

export type TBearSinglePagePresenterProps = {
  state: {
    locale: TLocale
    collection: Domain.Bear.TCollection | null
    bear: Domain.Bear.TEntity
  }
  actions: {
    onLinkClick: (argument: TLinkItem) => void
  }
}

export const BearSinglePagePresenter: FC<TBearSinglePagePresenterProps> = ({
  state: { collection, bear, locale },
  actions: { onLinkClick }
}) => {
  const { description, keyVisualImage, slug, name, nickname, shareText, metadata, ogpImage } = bear

  const content = documentToReactComponents(description)
  const twitterShare = 'https://twitter.com/intent/tweet'
  const twitterShareUrl = `https://www.bitbearclub.art/${locale}/bears/${slug}`
  const shareLink = `${twitterShare}?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(twitterShareUrl)}`
  return (
    <>
      <Head>
        <title>
          🐻 BitBear {bear.name} - {Constants.SITE_TITLE}
        </title>
        <meta property="og:image" content={ogpImage ? ogpImage.url : Constants.OGP_BEARS_IMAGE} />
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
                      {name}
                    </span>
                  </>
                )
              }}
            />
            <div className="container p-6 mx-auto">
              <div className="pb-20">
                <div className="flex overflow-y-auto items-center py-4 whitespace-nowrap">
                  <Link href={`/${locale}/bears`}>
                    <a className="font-bold text-gray-600 underline hover:underline">🐻 BitBear&#39;s</a>
                  </Link>
                  <span className="mx-3 text-gray-500 ">/</span>
                  <Link href={`/${locale}/bears/${slug}`}>
                    <a className="font-bold text-blue-600 underline hover:underline">{name}</a>
                  </Link>
                </div>
                <div className="flex flex-col mx-auto mt-4 lg:flex-row lg:mt-16 lg:w-4/5">
                  <div className="object-cover object-top overflow-hidden w-full h-64 rounded lg:object-center lg:w-1/2 lg:h-auto">
                    <Image
                      alt={`BitBear ${name}`}
                      className="rounded-lg"
                      src={keyVisualImage.url}
                      layout={'responsive'}
                      width={960}
                      height={960}
                    />
                  </div>
                  <div className="w-full lg:pl-10 lg:mt-0 lg:w-1/2">
                    <h2 className="mt-4 text-sm tracking-widest text-gray-500 lg:mt-0">🐻 NAME</h2>
                    <h1 className="mt-4 mb-2 text-3xl font-bold text-gray-900 lg:text-5xl">{name}</h1>
                    <div className="mt-6 leading-8">{content}</div>

                    {metadata && metadata.opensea.images && metadata.opensea.images.avatar && (
                      <>
                        <div className="flex mt-2">
                          {metadata.opensea.images.avatar.map(
                            (
                              item: { linkId: string; imageUrl: string; linkUrl: string },
                              index: Key | null | undefined
                            ) => {
                              return (
                                <button
                                  key={index}
                                  onClick={() => {
                                    onLinkClick({
                                      linkId: item.linkId,
                                      link: item.linkUrl
                                    })
                                    //
                                  }}
                                  className="block overflow-hidden z-10 p-0 my-0 mr-0 -ml-4 w-24 rounded-full border-4 border-white"
                                >
                                  <Image
                                    className="m-0 w-full h-full"
                                    src={item.imageUrl}
                                    alt="Bit Bear Avatar Series"
                                    layout={'responsive'}
                                    width="100%"
                                    height="100%"
                                  />
                                </button>
                              )
                            }
                          )}
                        </div>
                      </>
                    )}
                    {metadata && metadata.opensea.series && (
                      <>
                        <h4 className="mt-8 text-sm tracking-widest text-gray-500">Series:</h4>
                        {metadata.opensea.series.map(
                          (
                            item: {
                              bearName: string
                              seriesName: string
                              seriesDescription: string
                              collectionUrl: string
                              imageUrl: string
                            },
                            index: Key | null | undefined
                          ) => {
                            const { bearName, seriesName, seriesDescription, collectionUrl, imageUrl } = item
                            return (
                              <Molecules.SeriesItem
                                key={index}
                                state={{
                                  bearName,
                                  seriesName,
                                  seriesDescription,
                                  collectionUrl,
                                  imageUrl
                                }}
                              />
                            )
                          }
                        )}
                      </>
                    )}

                    <hr className="pb-4 mt-8" />
                    <div>
                      <h4 className=" text-sm tracking-widest text-gray-500">Share:</h4>
                      <Link href={shareLink}>
                        <a
                          target="_blank"
                          className="flex justify-center items-center py-6 mt-4 w-full text-lg font-bold text-center text-white bg-sky-500 hover:bg-sky-600 rounded-md transition-colors duration-200 md:text-xl lg:text-3xl"
                        >
                          <div className="inline-block w-8 h-8">
                            <svg
                              version="1.1"
                              id="Logo"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0"
                              y="0"
                              viewBox="0 0 248 204"
                            >
                              <g>
                                <path
                                  id="white_background"
                                  fill="#fff"
                                  d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                                />
                              </g>
                            </svg>
                          </div>

                          <span className="inline-block pl-4">{nickname}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-16 lg:mt-24 lg:w-4/5">
                  <hr />
                  {collection && <Organisms.MoreBearCollection state={{ collection }} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Templates.GenericTemplate>
    </>
  )
}

export const BearSinglePage: FC<TBearSinglePageProps> = ({ state: { collection, bear } }) => {
  const {
    state: { locale }
  } = Hooks.Locale.useLocaleContext()

  const onLinkClick = useCallback((argument: TLinkItem) => {
    SendLinkClckTrigger(argument.linkId || 'noneId')
    window.location.href = argument.link
  }, [])

  return (
    <BearSinglePagePresenter
      state={{
        locale,
        bear,
        collection
      }}
      actions={{ onLinkClick }}
    />
  )
}

export default BearSinglePage
