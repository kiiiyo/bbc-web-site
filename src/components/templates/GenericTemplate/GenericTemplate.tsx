import { FC } from 'react'

//  Interface

export type GenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  OverlayMenu?: React.ReactNode
  children?: React.ReactNode
}

// Presenter

export const GenericTemplate: FC<GenericTemplateProps> = ({ globalHeader, globalFooter, OverlayMenu, children }) => {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen">
      {globalHeader}
      {OverlayMenu}
      <div className="bg-gray-100">
        <div className="container py-6 px-4 mx-auto">
          <main>{children}</main>
        </div>
      </div>
      <div>{globalFooter}</div>
    </div>
  )
}
