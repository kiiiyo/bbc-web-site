import type { NextPage } from 'next'
import ErrorPage from 'next/error'
//
import { Context } from '@/features'
import { Pages } from '@/components'
import { withLocale } from '@/utils/translations/locales'

type State = {
  page: {
    path: string
    preview: boolean
    locale: 'ja' | 'en'
  }
}

type FindPageProps = {
  state: State
}

export const getServerSideProps = withLocale(async (locale, { resolvedUrl }) => {
  const path = String(resolvedUrl.split('?')) ?? '/'

  // TODO: エラーハンドリング
  const page = {
    path,
    locale
  }

  return {
    props: {
      state: { page }
    }
  }
})

const FindingBearlyPage: NextPage<FindPageProps> = ({ state: { page } }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: page.locale, path: page.path }}>
      <Pages.CampaignPage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default FindingBearlyPage
