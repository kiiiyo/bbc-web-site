import { FC, useState, useCallback } from 'react'
import Image from 'next/image'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

export type TFindSectionDisplay = 'SHOW' | 'HIDE'

export type TInlineFrameDisplay = 'SHOW' | 'HIDE'

export type TFindSectionPresenterProps = {
  state: {
    isLoading: boolean
    findSectionDisplay: TFindSectionDisplay
    language: TLanguage
  }
  actions: {
    onDisplayButtonClick: (condition: TFindSectionDisplay) => void
    onDisplayInlineFrameButtonClick: (condition: TInlineFrameDisplay) => void
    handleLoadingCondition: (condition: boolean) => void
  }
}

export const FindSectionPresenter: FC<TFindSectionPresenterProps> = ({
  state: { language },
  actions: { onDisplayInlineFrameButtonClick }
}) => {
  return (
    <div className="container pb-8 mx-auto lg:pb-16">
      <div className="flex flex-col mx-auto mt-8 w-full md:mt-16 lg:flex-row">
        <div className="object-cover object-center px-4 rounded-lg md:mt-0 lg:px-0 lg:w-2/5">
          <Image
            alt="Bear"
            className="rounded-lg"
            src="/assets/images/ogp-find.png"
            layout={'responsive'}
            width={1200}
            height={630}
          />
        </div>
        <div className="px-4 md:py-6 md:pl-10 md:mt-0 lg:w-3/5">
          <h2 className="mt-4 mb-2 text-3xl font-bold text-gray-900 lg:mt-0 lg:text-5xl">
            {language.page.findPage.section.title}
          </h2>
          <div className="py-8">
            <div className="flex relative pb-8 lg:pb-12">
              <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Atoms.GiftIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h3 className="py-2 mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.findPage.section.content.campaign.title}
                </h3>

                <div className="block overflow-hidden z-10 p-0 my-0 -ml-4 w-24 h-24 rounded-full border-4 border-white">
                  <Image
                    className="m-0 w-full h-full"
                    src="/assets/images/avatar-bearly.png"
                    alt="BitBear Bearly"
                    layout={'responsive'}
                    width="100%"
                    height="100%"
                  />
                </div>

                <p className="mt-4">{language.page.findPage.section.content.campaign.description}</p>
                <h4 className="py-2 mt-4 text-lg font-bold text-gray-900">
                  {language.page.campaignPage.section.content.term.title}
                </h4>
                <p>{language.page.campaignPage.section.content.term.description}</p>
                <p className="mt-4">{language.page.findPage.section.content.campaign.currentOwner}</p>
                <p className="mt-4 mb-2 text-xl font-bold text-gray-900 lg:text-2xl">
                  {language.page.findPage.section.content.campaign.currentPeople}
                </p>
                <h4 className="py-2 mt-4 font-bold tracking-wider text-gray-900">
                  {language.page.findPage.section.content.campaign.requirement.title}
                </h4>
                <ul>
                  <li>{language.page.findPage.section.content.campaign.requirement.list[0]}</li>
                  <li>{language.page.findPage.section.content.campaign.requirement.list[1]}</li>
                </ul>
              </div>
            </div>
            <div className="flex relative pb-8 lg:pb-12">
              <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h3 className="py-2 mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.findPage.section.content.step1.title}
                </h3>
                <p>{language.page.findPage.section.content.step1.description}</p>
              </div>
            </div>
            <div className="flex relative ">
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h3 className="py-2 mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.findPage.section.content.step2.title}
                </h3>
                <p>{language.page.findPage.section.content.step2.description}</p>

                <button
                  onClick={() => {
                    onDisplayInlineFrameButtonClick('SHOW')
                  }}
                  className="inline-flex items-center py-4 px-8 mx-1 mt-4 text-sm font-medium leading-5 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200 md:mx-0"
                >
                  <Atoms.SearchIcon className="mr-2 w-5 h-5" />
                  <span>{language.page.findPage.section.content.step2.buttonLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FindSection: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  const {
    actions: { handleOverlayInlineFrameDisplay }
  } = Hooks.App.useAppContext()

  const [findSectionDisplay, setFindSectionDisplay] = useState<TFindSectionDisplay>('HIDE')
  const [isLoading, setLoading] = useState<boolean>(true)

  const onDisplayButtonClick = useCallback(
    (condition: TFindSectionDisplay) => {
      setFindSectionDisplay(condition)
    },
    [setFindSectionDisplay]
  )

  const onDisplayInlineFrameButtonClick = useCallback(
    (condition: TInlineFrameDisplay) => {
      handleOverlayInlineFrameDisplay(condition)
    },
    [handleOverlayInlineFrameDisplay]
  )

  const handleLoadingCondition = useCallback(
    (condition: boolean) => {
      setLoading(condition)
    },
    [setLoading]
  )

  return (
    <FindSectionPresenter
      state={{ findSectionDisplay, language, isLoading }}
      actions={{
        onDisplayButtonClick,
        onDisplayInlineFrameButtonClick,
        handleLoadingCondition
      }}
    />
  )
}

export default FindSection
