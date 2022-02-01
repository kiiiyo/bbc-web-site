import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Hooks } from '@/features'
import { Atoms } from '@/components'
import type { TLanguage } from '@/types/language'
import type { TLocale } from '@/types/locale'

export type THomeCampaignPresenterProps = {
  state: {
    locale: TLocale
    language: TLanguage
  }
}

export const HomeCampaignPresenter: FC<THomeCampaignPresenterProps> = ({ state: { locale, language } }) => {
  return (
    <section>
      <div className="container py-8 px-6 mx-auto md:py-16">
        <div>
          <div className="text-center">
            <h2 className="font-bold">{language.page.homePage.section.campaign.title}</h2>
            <h3 className=" text-3xl font-bold">{language.page.homePage.section.campaign.subTitle}</h3>
            <p className="mt-4">{language.page.homePage.section.campaign.description}</p>
            <h4 className="py-2 mt-4 text-lg font-bold text-gray-900">
              {language.page.campaignPage.section.content.term.title}
            </h4>
            <p>{language.page.campaignPage.section.content.term.description}</p>
          </div>
          <div className="object-cover object-top overflow-hidden mx-auto mt-8 w-full rounded md:mt-16 md:h-80 lg:object-center lg:w-1/2">
            <Image
              alt="Find Bearly"
              className="rounded-lg"
              src="/assets/images/mainvisual-home-bearly.png"
              layout={'responsive'}
              width={1200}
              height={630}
            />
          </div>
          <div className="mt-8 md:flex md:justify-center md:mt-16">
            <Link href={`/${locale}/find`}>
              <a className="inline-flex items-center py-3 px-5 mx-auto text-lg leading-5 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 md:mx-0">
                <span>{language.page.homePage.section.campaign.buttonLabel}</span>
                <Atoms.ArrowSmRightIcon className="ml-2 w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export const HomeCampaign: FC = () => {
  const {
    state: { language, locale }
  } = Hooks.Locale.useLocaleContext()

  return <HomeCampaignPresenter state={{ language, locale }} />
}

export default HomeCampaign
