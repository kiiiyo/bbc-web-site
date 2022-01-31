import { language as EN } from './en'
import { language as JA } from './ja'

import type { TLocale } from '@/types/locale'

export { EN, JA }

export const changeLanguage = (locale: TLocale) => {
  switch (locale) {
    case 'ja':
      return JA
    case 'en':
      return EN
    default:
      return JA
  }
}
