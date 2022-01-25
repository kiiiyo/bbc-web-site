import { language as EN } from './en'
import { language as JA } from './ja'

export { EN, JA }

export const changeLanguage = (locale: 'ja' | 'en') => {
  switch (locale) {
    case 'ja':
      return JA
    case 'en':
      return EN
    default:
      return JA
  }
}
