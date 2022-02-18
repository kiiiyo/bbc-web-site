import { FC, Key, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//
import { Constants } from '@/env'
import { Hooks, Domain } from '@/features'
import { Templates, Organisms } from '@/components'
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

                    {metadata && metadata.opensea.series.avatar && (
                      <>
                        <h3 className="mt-8 text-xl font-medium text-gray-900">Avatar Series</h3>
                        <div className="flex mt-2">
                          {metadata.opensea.series.avatar.map(
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
                                  className="block overflow-hidden z-10 p-0 my-0 mr-0 -ml-4 w-24 h-24 rounded-full border-4 border-white"
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

                    {metadata && metadata.opensea && (
                      <>
                        {metadata.opensea.button && (
                          <div className="flex mt-8">
                            <button
                              onClick={() => {
                                onLinkClick({
                                  linkId: metadata.opensea.button.linkId,
                                  link: metadata.opensea.button.link
                                })
                                //
                              }}
                              className="inline-flex items-center py-2 px-3 mx-1 text-sm font-medium leading-5 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200 md:mx-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  fill="#fff"
                                  d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
                                />
                                <path
                                  fill="#fff"
                                  d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
                                />
                              </svg>
                              OpenSea
                            </button>
                          </div>
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
