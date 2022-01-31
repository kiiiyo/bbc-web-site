import type { NextPage } from 'next'
import ErrorPage from 'next/error'
//
import { Context } from '@/features'
import { Pages } from '@/components'
import { withLocale } from '@/utils/translations/locales'
import { isPreviewEnabled } from '@/utils/preview'
import { TLocale } from '@/types/locale'

type State = {
  page:
    | {
        path: string
        preview: boolean
        locale: TLocale
      }
    | undefined
}

type LandingPageProps = {
  state: State
}

export const getServerSideProps = withLocale(async (locale, { query, resolvedUrl }) => {
  const path = String(resolvedUrl.split('?')) ?? '/'
  const preview = isPreviewEnabled(query)

  const page = {
    path,
    preview,
    locale
  }

  return {
    props: {
      state: { page }
    }
  }
})

export const LandingPage: NextPage<LandingPageProps> = ({ state: { page } }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: page.locale, path: page.path }}>
      <Pages.HomePage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default LandingPage
