import { FC, createContext } from 'react'

import type { Locale } from '@/utils/translations/locales'

export type State = {
  locale: Locale | null
}

export type LocaleContextValueType = {
  state: State
}

const initContextValue: LocaleContextValueType = {
  state: {
    locale: null
  }
}

export const LocaleContext = createContext<LocaleContextValueType>(initContextValue)

interface LocaleProviderProps {
  value: {
    locale: Locale
  }
}

export const useLocaleContext = (props: LocaleProviderProps): LocaleContextValueType => {
  const {
    value: { locale }
  } = props

  return {
    state: {
      locale
    }
  }
}

export const LocaleContextProvider: FC<LocaleProviderProps> = ({ value, children }) => {
  const { state } = useLocaleContext({ value })
  return <LocaleContext.Provider value={{ state }}>{children}</LocaleContext.Provider>
}

export const LocaleContextConsumer = LocaleContext.Consumer

export default LocaleContext
