import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

export type TCampaignPagePresenterProps = {
  state: {
    language: TLanguage
  }
}

export const CampaignSectionPresenter: FC<TCampaignPagePresenterProps> = ({ state: { language } }) => {
  return (
    <div className="flex flex-col mx-auto mt-24 lg:flex-row lg:w-4/5">
      <div className="object-cover object-top overflow-hidden w-full h-64 rounded lg:object-center lg:w-1/2 lg:h-auto">
        <Image
          alt="Bear Name Bearly"
          className=""
          src="/assets/images/mainvisual-bearly.png"
          layout={'responsive'}
          width={960}
          height={640}
        />
      </div>
      <div className="w-full lg:pl-10 lg:mt-0 lg:w-1/2">
        <h2 className="mt-4 text-sm tracking-widest text-gray-500 lg:mt-0">🐻 BEAR NAME</h2>
        <h1 className="my-1 text-3xl font-medium text-gray-900 ">
          {language.page.campaignPage.section.content.bearName}
        </h1>
        <p className="mt-6">{language.page.campaignPage.section.content.description}</p>
        <h3 className="py-2 mt-4 text-lg font-bold text-gray-900">
          {language.page.campaignPage.section.content.term.title}
        </h3>
        <p>{language.page.campaignPage.section.content.term.description}</p>

        <h3 className="py-2 mt-4 text-lg font-bold text-gray-900">
          {language.page.campaignPage.section.content.requirement.title}
        </h3>
        <ul>
          <li>{language.page.campaignPage.section.content.requirement.lists[0]}</li>
          <li>{language.page.campaignPage.section.content.requirement.lists[1]}</li>
        </ul>
        <div className="mt-12">
          <div className="flex relative pb-12">
            <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
              <Atoms.TwitterIcon className="w-6 h-6" />
            </div>
            <div className="grow pl-4">
              <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">
                {language.page.campaignPage.section.twitter.title}
              </h2>
              <p className="mt-4">{language.page.campaignPage.section.twitter.description}</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <Link href="https://twitter.com/BitBearClub">
                    <a target="_blank" className="text-blue-600 hover:text-blue-700 underline">
                      @BitBearClub
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/BitBearPromoter">
                    <a target="_blank" className="text-blue-600 hover:text-blue-700 underline">
                      @BitBearPromoter
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
              <Atoms.ClipboardIcon className="w-6 h-6" />
            </div>
            <div className="grow pl-4">
              <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">
                {language.page.campaignPage.section.form.title}
              </h2>
              <p className="mt-4">{language.page.campaignPage.section.form.secretWord}</p>
              <p className="mt-4">{language.page.campaignPage.section.form.description}</p>

              <Link href={language.page.campaignPage.section.form.url}>
                <a
                  target="_blank"
                  className="flex justify-center items-center py-6 px-3 mx-1 mt-10 w-full text-lg leading-5 text-center text-white align-middle bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200 md:mx-0"
                >
                  <Atoms.GoogleIcon className="w-12 h-12" />
                  <span className="block pl-2">Google Form</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
              <Atoms.GiftIcon className="w-6 h-6" />
            </div>
            <div className="grow pl-4">
              <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">
                {language.page.campaignPage.section.openSea.title}
              </h2>
              <p className="mt-4">{language.page.campaignPage.section.openSea.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CampaignSection: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return <CampaignSectionPresenter state={{ language }} />
}

export default CampaignSection
