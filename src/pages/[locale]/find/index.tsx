import type { NextPage } from 'next'
import ErrorPage from 'next/error'
//
import { Context } from '@/features'
import { Pages } from '@/components'
import { withLocale } from '@/utils/translations/locales'

type State = {
  page: {
    slug: string
    locale: string
  }
}

type FindPageProps = {
  state: State
}

export const getServerSideProps = withLocale(async (locale, { params }) => {
  const slug = String(params?.slug ?? '/')

  // TODO: エラーハンドリング
  const page = {
    slug,
    locale
  }

  return {
    props: {
      state: { page }
    }
  }
})

const FindPage: NextPage<FindPageProps> = ({ state: { page } }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: page.locale }}>
      <Pages.FindPage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default FindPage
