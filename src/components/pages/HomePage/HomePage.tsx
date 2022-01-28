import { FC } from 'react'
import Image from 'next/image'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'

type State = {
  language: TLanguage
}

export type THomePageProps = {
  state: State
}

export const HomePagePresenter: FC<THomePageProps> = ({ state: { language } }) => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.Header />}
      globalFooter={<Organisms.Footer />}
      OverlayMenu={<Organisms.OverlayMenu />}
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
            <div className="overflow-hidden relative z-10 justify-items-center items-center mx-auto mt-6 w-24 h-24 rounded-full border-2 border-gray-400">
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
    </Templates.GenericTemplate>
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
