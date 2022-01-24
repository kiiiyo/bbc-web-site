import { createContext, useContext } from 'react'
import type { Locale } from '@/utils/translations/locales'

export const LocaleContext = createContext<Locale | null>(null)

export const useLocaleContext = () => useContext(LocaleContext)
