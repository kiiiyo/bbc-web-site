import { FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'
//
import { Constants } from '@/env'
import { Hooks } from '@/features'
import { Templates, Organisms, Molecules } from '@/components'
import type { TLanguage } from '@/types/language'

type State = {
  language: TLanguage
}

export type THomePageProps = {
  state: State
}

export const HomePagePresenter: FC<THomePageProps> = ({ state: { language } }) => {
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
        <Organisms.Hero
          state={{
            title: (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {language.page.homePage.hero.title}
              </span>
            ),
            description: language.page.homePage.hero.description,
            image: (
              <div className="overflow-hidden relative z-10 justify-items-center items-center mx-auto mt-6 w-24 h-24 rounded-full border-2 border-white">
                <Image
                  src="/assets/images/hero-image.gif"
                  alt="BitBear Neo"
                  className="object-cover"
                  width="100%"
                  height="100%"
                />
              </div>
            )
          }}
        />
        <Molecules.HomeAbout />
      </Templates.GenericTemplate>
    </>
  )
}

export const HomePage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return (
    <HomePagePresenter
      state={{
        language
      }}
    />
  )
}

export default HomePage
