import type { NextPage } from 'next'
import ErrorPage from 'next/error'
//
import { Context } from '@/features'
import { Pages } from '@/components'
import { withLocale } from '@/utils/translations/locales'
import { isPreviewEnabled } from '@/utils/preview'

type State = {
  page:
    | {
        slug: string
        preview: boolean
        locale: string
      }
    | undefined
}

type LandingPageProps = {
  state: State
}

export const getServerSideProps = withLocale(async (locale, { params, query }) => {
  const slug = String(params?.slug ?? '/')
  const preview = isPreviewEnabled(query)

  const page = {
    slug,
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
    <Context.LocaleContext.LocaleContextProvider value={{ locale: page.locale }}>
      <Pages.HomePage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default LandingPage
