import { FC } from 'react'
import { Hooks } from '@/features'
//  Interface

export type TGenericTemplateProps = {
  state: {
    globalHeader?: React.ReactNode
    globalFooter?: React.ReactNode
    overlayMenu?: React.ReactNode
  }
  children?: React.ReactNode
}

export type TGenericTemplatePresenterProps = {
  state: {
    globalHeader?: React.ReactNode
    globalFooter?: React.ReactNode
    overlayMenu?: React.ReactNode
    overlayMenuDisplay: 'SHOW' | 'HIDE'
  }
  children?: React.ReactNode
}

// Presenter

export const GenericTemplatePresenter: FC<TGenericTemplatePresenterProps> = ({
  state: { globalHeader, globalFooter, overlayMenu, overlayMenuDisplay },
  children
}) => {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen">
      {globalHeader}
      {overlayMenu}
      {overlayMenuDisplay === 'HIDE' && (
        <main>
          <div className="mt-20 bg-gray-100 md:mt-32">{children}</div>
        </main>
      )}
      {globalFooter}
    </div>
  )
}

export const GenericTemplate: FC<TGenericTemplateProps> = ({
  state: { globalHeader, globalFooter, overlayMenu },
  children
}) => {
  const {
    state: { overlayMenuDisplay }
  } = Hooks.App.useAppContext()

  return (
    <GenericTemplatePresenter
      state={{
        globalHeader,
        globalFooter,
        overlayMenu,
        overlayMenuDisplay
      }}
    >
      {children}
    </GenericTemplatePresenter>
  )
}

export default GenericTemplate
