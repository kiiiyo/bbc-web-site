import { FC, useState, useCallback } from 'react'
import { Atoms } from '@/components'
import Image from 'next/image'

export type TFindSectionDisplay = 'SHOW' | 'HIDE'

export type TFindSectionPresenterProps = {
  state: {
    findSectionDisplay: TFindSectionDisplay
  }
  actions: {
    onDisplayButtonClick: (condition: TFindSectionDisplay) => void
  }
}

export const FooterPresenter: FC<TFindSectionPresenterProps> = ({
  state: { findSectionDisplay },
  actions: { onDisplayButtonClick }
}) => {
  return (
    <div className="relative" style={{ height: 640 }}>
      <div className="container flex mx-auto">
        <div className="flex relative z-10 flex-col mx-4 mt-10 w-full bg-white rounded-lg shadow-md md:ml-auto md:w-1/2 lg:w-1/3">
          <div className="flex flex-row p-6">
            <h2 className="text-xl font-bold">Find 🐻 BitBear</h2>
            {findSectionDisplay === 'SHOW' && (
              <button
                className="ml-auto"
                onClick={() => {
                  onDisplayButtonClick('HIDE')
                }}
              >
                <Atoms.EyeOffIcon className="w-5 h-5" />
              </button>
            )}
            {findSectionDisplay === 'HIDE' && (
              <button
                className="ml-auto"
                onClick={() => {
                  onDisplayButtonClick('SHOW')
                }}
              >
                <Atoms.EyeIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          {findSectionDisplay === 'SHOW' && (
            <>
              <hr />
              <div className="py-12 px-6">
                <div className="flex relative pb-4">
                  <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                    <Atoms.FlagIcon className="w-5 h-5" />
                  </div>
                  <div className="grow pl-4">
                    <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Step1</h3>
                    <p>
                      <strong>「See the bord」</strong> Click.
                    </p>
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
                    <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Step2</h3>
                    <p>
                      Click on the image of Opensea icon your favorite <strong>🐻 BitBear</strong> to see more details.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="inline-flex overflow-hidden relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                    <Image
                      className="w-full h-full"
                      src="https://lh3.googleusercontent.com/U12mT7o2i4PbjeVQPe2yX4L4upgXl_QR9XefE-7h9EBuUCivaJppfT2RZv-_s8kH6O2MT6c1nHiQqcWKCnpHcpEp4AG3MftEJVbMU3k=w600"
                      alt="Bit Bear Avatar Series #A0001"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="grow pl-4">
                    <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Step3</h3>
                    <h4 className="font-bold">🎁 Giveaway Campaign🎉</h4>
                    <p>
                      We&apos;re running a campaign to find Baily! The first 64 people to arrive will giveaway an NFT
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          src="https://miro.com/app/live-embed/uXjVOUbSxqw=/?moveToViewport=-1391,-1479,2800,2887"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export const FindSection: FC = () => {
  const [findSectionDisplay, setFindSectionDisplay] = useState<TFindSectionDisplay>('SHOW')

  const onDisplayButtonClick = useCallback(
    (condition: TFindSectionDisplay) => {
      setFindSectionDisplay(condition)
    },
    [setFindSectionDisplay]
  )

  return <FooterPresenter state={{ findSectionDisplay }} actions={{ onDisplayButtonClick }} />
}

export default FindSection
