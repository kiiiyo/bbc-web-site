import { FC, useState, useCallback } from 'react'
import Image from 'next/image'
//
import { Hooks, Context } from '@/features'
import { Atoms } from '@/components'
//

export type TOverlayInlineFramProps = {
  state: {
    url: string
  }
}

export type TOverlayInlineFramePresenterProps = {
  state: {
    isLoading: boolean
    url: string
    overlayInlineFrameDisplay: Context.AppContext.TOverlayInlineFrameDisplay
  }
  actions: {
    onCloseButtonClick: () => void
    handleLoadingCondition: (condition: boolean) => void
  }
}

// Component

export const OverlayInlineFramePresenter: FC<TOverlayInlineFramePresenterProps> = ({
  state: { isLoading, url, overlayInlineFrameDisplay },
  actions: { onCloseButtonClick, handleLoadingCondition }
}) => {
  console.log('isLoading', isLoading)
  return overlayInlineFrameDisplay === 'SHOW' ? (
    <div className="overflow-y-auto fixed inset-0 z-50 min-h-screen">
      <div className="flex overflow-hidden relative items-center px-4 min-h-screen bg-gray-300 transition-opacity">
        <div className="fixed top-0 left-0 w-full">
          <div className="flex flex-row-reverse p-4 bg-white shadow-md">
            <button
              type="button"
              onClick={() => {
                onCloseButtonClick()
              }}
            >
              <Atoms.CloseIcon className="h-10 text-black" />
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="flex absolute z-20 justify-center items-center w-full h-full" style={{ top: 72 }}>
            <div className="text-center animate-bounce">
              <div className="overflow-hidden w-24 h-24 bg-blue-300 rounded-full border-4 border-white">
                <Image
                  src="/assets/images/loading-bitbear.gif"
                  alt="BitBearClub"
                  className="object-cover"
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="mt-2 font-bold">Loading...</p>
            </div>
          </div>
        )}

        <div className="absolute left-0 z-10 w-full h-full" style={{ top: 72 }}>
          <iframe
            src={url}
            width="100%"
            height="100%"
            onLoad={() => {
              handleLoadingCondition(false)
            }}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          />
        </div>
      </div>
    </div>
  ) : null
}

export const OverlayInlineFrame: FC<TOverlayInlineFramProps> = ({ state: { url } }) => {
  const {
    state: { overlayInlineFrameDisplay },
    actions: { handleOverlayInlineFrameDisplay }
  } = Hooks.App.useAppContext()

  const [isLoading, setLoading] = useState<boolean>(true)

  const handleLoadingCondition = useCallback(
    (condition: boolean) => {
      setLoading(condition)
    },
    [setLoading]
  )

  const onCloseButtonClick = useCallback(() => {
    handleOverlayInlineFrameDisplay('HIDE')
  }, [handleOverlayInlineFrameDisplay])

  return (
    <OverlayInlineFramePresenter
      state={{
        isLoading,
        url,
        overlayInlineFrameDisplay
      }}
      actions={{
        onCloseButtonClick,
        handleLoadingCondition
      }}
    />
  )
}

export default OverlayInlineFrame
