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

type RoadmapPageProps = {
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

export const RoadmapPage: NextPage<RoadmapPageProps> = ({ state: { page } }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: page.locale }}>
      <Pages.RoadmapPage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default RoadmapPage
