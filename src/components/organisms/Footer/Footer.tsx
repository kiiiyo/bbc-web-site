import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
//
import { Hooks } from '@/features'

//type FooterProps = {}
type FooterPresenter = {
  state: { locale: string }
}

export const FooterPresenter: FC<FooterPresenter> = ({ state: { locale } }) => {
  return (
    <footer>
      <div className="container p-4 py-12 mx-auto bg-white md:px-6">
        <div className="px-4 mx-auto w-full">
          <div className="grid gap-12 lg:grid-cols-6 lg:gap-24">
            <div className="col-span-2">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a className="flex justify-between items-center text-gray-800 hover:text-gray-700 transition-colors duration-200">
                    <div className="overflow-hidden mr-2 w-8 h-8 rounded-full border-2 border-gray-400">
                      <Image
                        src="/assets/images/logo.png"
                        alt="BitBearClub"
                        className="object-cover"
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <span className="text-sm font-bold leading-none md:text-2xl">BitBearClub</span>
                  </a>
                </Link>
              </div>
              <p className="mt-4">A collector&#39;s NFT item project of bears using pixel art.</p>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400">MENU</h3>
              <ul>
                <li className="mt-6">
                  <Link href={`/${locale}/about`}>
                    <a className="font-normal text-gray-600 hover:underline">🐻 About</a>
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href={`/${locale}/roadmap`}>
                    <a className="font-normal text-gray-600 hover:underline">🏃 Roadmap</a>
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href={`/${locale}/find`}>
                    <a className="font-normal text-gray-600 hover:underline">🔍 Find</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400">LINK</h3>
              <ul>
                <li className="mt-6">
                  <Link href="https://opensea.io/BitBearClub">
                    <a target="_blank" className="font-normal text-gray-600 hover:underline">
                      OpenSea
                    </a>
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href="https://twitter.com/BitBearClub">
                    <a target="_blank" className="font-normal text-gray-600 hover:underline">
                      Twitter
                    </a>
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href="https://www.instagram.com/bit_bear_club/">
                    <a target="_blank" className="font-normal text-gray-600 hover:underline">
                      Instagram
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-gray-200 lg:my-12" />
          <small className="block text-center text-gray-600">
            <span>&copy;</span>
            <span id="currentYear">2022</span> <Link href="/">BitBearClub</Link> <span>. All Rights Reserved.</span>
          </small>
        </div>
      </div>
    </footer>
  )
}

export const Footer: FC = () => {
  const {
    state: { locale }
  } = Hooks.Locale.useLocaleContext()

  return (
    <FooterPresenter
      state={{
        locale: locale || 'ja'
      }}
    />
  )
}

export default Footer
