import { FC, createContext, useEffect, useState } from 'react'
//
import type { TLanguage } from '@/types/language'
import type { TLocale } from '@/types/locale'
//
import { Language } from '@/env'

export type State = {
  locale: TLocale
  path: string
  language: TLanguage
}

export type LocaleContextValueType = {
  state: State
}

const initContextValue: LocaleContextValueType = {
  state: {
    locale: 'ja',
    path: '/',
    language: Language.JA
  }
}

export const LocaleContext = createContext<LocaleContextValueType>(initContextValue)

interface LocaleProviderProps {
  value: {
    locale: 'ja' | 'en'
    path: string
  }
}

export const useLocaleContext = (props: LocaleProviderProps): LocaleContextValueType => {
  const {
    value: { locale, path }
  } = props

  const [language, setLanguage] = useState<TLanguage>(Language.JA)

  useEffect(() => {
    setLanguage(Language.changeLanguage(locale))
  }, [locale, setLanguage])

  return {
    state: {
      locale,
      path,
      language
    }
  }
}

export const LocaleContextProvider: FC<LocaleProviderProps> = ({ value, children }) => {
  const { state } = useLocaleContext({ value })
  return <LocaleContext.Provider value={{ state }}>{children}</LocaleContext.Provider>
}

export const LocaleContextConsumer = LocaleContext.Consumer

export default LocaleContext
