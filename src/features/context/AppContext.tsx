import React, { FC, createContext, useState, useCallback, useEffect } from 'react'

import { Constants } from '@/env'

export type TOverlayMenuDisplay = 'SHOW' | 'HIDE'

export type State = {
  screenSize: {
    width: number
    height: number
  }
  isMobile: boolean
  overlayMenuDisplay: TOverlayMenuDisplay
}

export type Actions = {
  handleOverlayMenuDisplay: (condition: TOverlayMenuDisplay) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

// Context

const initContextValue: AppContextValueType = {
  state: {
    overlayMenuDisplay: 'HIDE',
    screenSize: {
      width: 0,
      height: 0
    },
    isMobile: false
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleOverlayMenuDisplay: () => {}
  }
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

// Hooks

export const useAppContext = (): AppContextValueType => {
  // State
  const [overlayMenuDisplay, setOverlayMenuDisplay] = useState<TOverlayMenuDisplay>('HIDE')

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  // Actions
  const handleOverlayMenuDisplay = useCallback(
    (condition) => {
      setOverlayMenuDisplay(condition)
    },
    [setOverlayMenuDisplay]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return {
    state: {
      screenSize,
      isMobile: screenSize.width <= Constants.MOBILE_BREAK_POINT_SIZE,
      overlayMenuDisplay
    },
    actions: { handleOverlayMenuDisplay }
  }
}

// Provider

export const AppContextProvider: FC = ({ children }) => {
  const { state, actions } = useAppContext()
  return <AppContext.Provider value={{ state, actions }}>{children}</AppContext.Provider>
}

export const AppContextConsumer = AppContext.Consumer

export default AppContext
