import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Constants } from '@/env'
import { Hooks, Context } from '@/features'
import { Atoms } from '@/components'
//
import type { TLanguage } from '@/types/language'
import type { TMenuItem } from '@/types/common'
import type { TLocale } from '@/types/locale'

//
import styles from './OverlayMenu.module.scss'

export type TOverlayMenuPresenterProps = {
  state: {
    isMobile: boolean
    locale: TLocale
    language: TLanguage
    overlayMenuDisplay: Context.AppContext.TOverlayMenuDisplay
    menuList: Array<TMenuItem>
  }
  actions: {
    onCloseButtonClick: (condition: Context.AppContext.TOverlayMenuDisplay) => void
  }
}

// Component

export const OverlayMenuPresenter: FC<TOverlayMenuPresenterProps> = ({
  state: { isMobile, locale, language, overlayMenuDisplay, menuList },
  actions: { onCloseButtonClick }
}) => {
  return isMobile && overlayMenuDisplay === 'SHOW' ? (
    <div className="overflow-y-auto fixed inset-0 z-50 min-h-screen">
      <div className="flex overflow-hidden relative items-center px-4 min-h-screen bg-gray-800 transition-opacity">
        <div className={styles.smallStars}></div>
        <div className={styles.mediumStars}></div>
        <div className={styles.bigStars}></div>
        <div className="fixed top-0 left-0 p-4">
          <Link href={`/${locale}`}>
            <a className="flex justify-between items-center text-gray-800 hover:text-gray-700 transition-colors duration-200">
              <div className="overflow-hidden mr-3 w-12 h-12 rounded-full border-2 border-gray-400">
                <Image
                  src="/assets/images/logo.png"
                  alt="BitBearClub"
                  className="object-cover"
                  width="100%"
                  height="100%"
                />
              </div>

              <span className="text-xl font-bold leading-none text-white md:text-2xl">
                {language.common.meta.title}
              </span>
            </a>
          </Link>
        </div>
        <div className="fixed top-0 right-0 p-4">
          <button
            type="button"
            onClick={() => {
              onCloseButtonClick('HIDE')
            }}
          >
            <Atoms.CloseIcon className="h-8 text-white" />
          </button>
        </div>
        <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium">
          {menuList.map((menuItem: TMenuItem, index: number) => {
            return (
              <li key={index}>
                <Link href={menuItem.path}>
                  <a
                    onClick={() => {
                      onCloseButtonClick('HIDE')
                    }}
                    className="block py-4 text-2xl font-bold text-white"
                  >
                    <span className="mr-3 md:inline-block">{menuItem.icon}</span>
                    <span className="inline-block">{menuItem.label}</span>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  ) : null
}

export const OverlayMenu: FC = () => {
  const {
    state: { overlayMenuDisplay, isMobile },
    actions: { handleOverlayMenuDisplay }
  } = Hooks.App.useAppContext()

  const {
    state: { locale, language }
  } = Hooks.Locale.useLocaleContext()

  const localeState = locale || 'ja'

  return (
    <OverlayMenuPresenter
      state={{
        isMobile,
        locale: localeState,
        language,
        overlayMenuDisplay,
        menuList: Constants.GLOBAL_MENU_LIST[`${localeState}`]
      }}
      actions={{
        onCloseButtonClick: handleOverlayMenuDisplay
      }}
    />
  )
}

export default OverlayMenu
