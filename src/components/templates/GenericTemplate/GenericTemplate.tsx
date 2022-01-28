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
      <main>
        <div className="mt-20 md:mt-32">{children}</div>
      </main>

      {globalFooter}
    </div>
  )
}
