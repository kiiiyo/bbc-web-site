import { useContext } from 'react'
//
import { LocaleContext } from '@/features/context/LocaleContext'

export const useLocaleContext = () => {
  return useContext(LocaleContext)
}
