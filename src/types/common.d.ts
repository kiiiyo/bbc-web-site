// GLOBAL_MENU_LIST

export type TMenuName = 'HOME'

export type TMenuItem = {
  name: string
  icon: string
  label: string
  path: string
}

export type TGlobalMenuList = {
  ja: Array<TMenuItem>
  en: Array<TMenuItem>
}
