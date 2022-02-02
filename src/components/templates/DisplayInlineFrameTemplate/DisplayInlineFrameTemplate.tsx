import { FC } from 'react'
import { Hooks } from '@/features'
//  Interface

export type TDisplayInlineFrameTemplateProps = {
  state: {
    globalHeader?: React.ReactNode
    globalFooter?: React.ReactNode
    overlayMenu?: React.ReactNode
    overlayInlineFrame?: React.ReactNode
  }
  children?: React.ReactNode
}

export type TDisplayInlineFrameTemplatePresenterProps = {
  state: {
    globalHeader?: React.ReactNode
    globalFooter?: React.ReactNode
    overlayMenu?: React.ReactNode
    overlayInlineFrame?: React.ReactNode
    overlayMenuDisplay: 'SHOW' | 'HIDE'
    overlayInlineFrameDisplay: 'SHOW' | 'HIDE'
  }
  children?: React.ReactNode
}

// Presenter

export const DisplayInlineFrameTemplatePresenter: FC<TDisplayInlineFrameTemplatePresenterProps> = ({
  state: { globalHeader, globalFooter, overlayMenu, overlayInlineFrame, overlayMenuDisplay, overlayInlineFrameDisplay },
  children
}) => {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen">
      {globalHeader}
      {overlayMenu}
      {overlayInlineFrame}
      {(overlayMenuDisplay === 'HIDE' || overlayInlineFrameDisplay === 'HIDE') && (
        <main>
          <div className="mt-20 bg-gray-100 md:mt-32">{children}</div>
        </main>
      )}
      {globalFooter}
    </div>
  )
}

export const DisplayInlineFrameTemplate: FC<TDisplayInlineFrameTemplateProps> = ({
  state: { globalHeader, globalFooter, overlayMenu, overlayInlineFrame },
  children
}) => {
  const {
    state: { overlayMenuDisplay, overlayInlineFrameDisplay }
  } = Hooks.App.useAppContext()

  return (
    <DisplayInlineFrameTemplatePresenter
      state={{
        globalHeader,
        globalFooter,
        overlayMenu,
        overlayInlineFrame,
        overlayMenuDisplay,
        overlayInlineFrameDisplay
      }}
    >
      {children}
    </DisplayInlineFrameTemplatePresenter>
  )
}

export default DisplayInlineFrameTemplate
