import { FC, useState, useCallback } from 'react'
import Image from 'next/image'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

export type TFindSectionDisplay = 'SHOW' | 'HIDE'

export type TFindSectionPresenterProps = {
  state: {
    isLoading: boolean
    findSectionDisplay: TFindSectionDisplay
    language: TLanguage
  }
  actions: {
    onDisplayButtonClick: (condition: TFindSectionDisplay) => void
    handleLoadingCondition: (condition: boolean) => void
  }
}

export const FindSectionPresenter: FC<TFindSectionPresenterProps> = ({ state: { language } }) => {
  return (
    <div className="relative" style={{ minHeight: 640 }}>
      <div className="container flex mx-auto">
        <div className="flex relative z-10 flex-col mx-4 mt-10 w-full bg-white rounded-lg shadow-md md:ml-auto md:w-1/2 lg:w-1/3">
          <div className="flex flex-row p-6">
            <h2 className="text-xl font-bold">{language.page.findPage.section.title}</h2>

            <hr />
            <div className="py-8 px-6">
              <div className="flex relative pb-4">
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
              <div className="flex relative pb-4">
                <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                  <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                  <Atoms.FlagIcon className="w-5 h-5" />
                </div>
                <div className="grow pl-4">
                  <h3 className="py-2 mb-1 text-xl font-bold tracking-wider text-gray-900">
                    {language.page.findPage.section.content.step2.title}
                  </h3>
                  <p>{language.page.findPage.section.content.step2.description}</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="inline-flex overflow-hidden relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white rounded-full">
                  <Image
                    src="/assets/images/avatar-bearly.png"
                    alt="BitBear Bearly"
                    className="object-cover"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="grow pl-4">
                  <h3 className="py-2 mb-1 text-xl font-bold tracking-wider text-gray-900">
                    {language.page.findPage.section.content.campaign.title}
                  </h3>
                  <p>{language.page.findPage.section.content.campaign.description}</p>
                  <h4 className="py-2 mt-4 text-lg font-bold text-gray-900">
                    {language.page.campaignPage.section.content.term.title}
                  </h4>
                  <p>{language.page.campaignPage.section.content.term.description}</p>
                  <p className="mt-4 mb-2 font-bold text-gray-900 lg:text-xl">残り64名</p>
                  <h4 className="py-2 mt-4 font-bold tracking-wider text-gray-900">
                    {language.page.findPage.section.content.campaign.requirement.title}
                  </h4>
                  <ul>
                    <li>{language.page.findPage.section.content.campaign.requirement.list[0]}</li>
                    <li>{language.page.findPage.section.content.campaign.requirement.list[1]}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
      <div className="absolute inset-0 bg-gray-100">
        {isLoading && (
          <div className="flex justify-center items-center w-full h-full">
            <svg
              role="status"
              className="inline mr-2 w-12 h-12 text-gray-200 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
          </div>
        )}

        <iframe
          width="100%"
          height="100%"
          src="https://miro.com/app/live-embed/uXjVOUbSxqw=/?moveToViewport=-1391,-1479,2800,2887"
          frameBorder="0"
          onLoad={() => {
            handleLoadingCondition(false)
          }}
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>

      */}
      </div>
    </div>
  )
}

export const FindSection: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  const [findSectionDisplay, setFindSectionDisplay] = useState<TFindSectionDisplay>('HIDE')
  const [isLoading, setLoading] = useState<boolean>(true)

  const onDisplayButtonClick = useCallback(
    (condition: TFindSectionDisplay) => {
      setFindSectionDisplay(condition)
    },
    [setFindSectionDisplay]
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
      actions={{ onDisplayButtonClick, handleLoadingCondition }}
    />
  )
}

export default FindSection
