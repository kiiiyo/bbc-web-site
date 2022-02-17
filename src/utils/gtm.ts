export const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export const SendLinkClckTrigger = (label: string): void => {
  window.dataLayer.push({
    event: 'link_click_trigger',
    link_click_trigger: label
  })
}
