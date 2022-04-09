import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Hooks } from '@/features'
import type { TLanguage } from '@/types/language'
import type { TLocale } from '@/types/locale'

export type THomeAboutPresenterProps = {
  state: {
    locale: TLocale
    language: TLanguage
  }
}

export const HomeAboutPresenter: FC<THomeAboutPresenterProps> = ({ state: { locale, language } }) => {
  return (
    <div className="border-b-2 border-gray-200 border-solid">
      <div className="container py-8 px-6 mx-auto md:py-16">
        <div className="flex flex-col mx-auto lg:flex-row lg:w-4/5">
          <div className="object-cover object-top overflow-hidden w-full rounded lg:object-center lg:w-1/2 lg:h-auto">
            <Image
              alt="BitBearClub"
              className="rounded-lg"
              src="/assets/images/ogp.png"
              layout={'responsive'}
              width={1200}
              height={630}
            />
          </div>
          <div className="w-full lg:pl-16 lg:mt-0 lg:w-1/2">
            <h1 className="mt-4 text-2xl font-medium text-gray-900 md:mt-8 md:text-4xl lg:mt-1">
              {language.page.homePage.section.about.title}
            </h1>
            <p className="mt-6 leading-8">{language.page.homePage.section.about.description}</p>

            <div className="flex justify-center mt-6 md:justify-start md:mt-6">
              <Link href={`/${locale}/bears`}>
                <a
                  className="rounded-md transition-colors duration-200 md:w-fit md:mx-0 md:mt-6
inline-flex items-center py-4 px-8 text-lg leading-5 text-center text-white bg-gradient-to-r from-neutral-700 to-neutral-800"
                >
                  <span className="mr-3">🐻</span>
                  <span>{language.page.homePage.section.about.buttonLabel}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const HomeAbout: FC = () => {
  const {
    state: { language, locale }
  } = Hooks.Locale.useLocaleContext()

  return <HomeAboutPresenter state={{ language, locale }} />
}

export default HomeAbout
