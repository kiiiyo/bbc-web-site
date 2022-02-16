import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import ErrorPage from 'next/error'
//
import { Context } from '@/features'
import { Pages } from '@/components'
import { getLocale, UnknownLocale } from '@/utils/translations/locales'

type BearCollectionPageProps = InferGetStaticPropsType<typeof getStaticProps>

type State = {
  page: {
    locale?: string | typeof UnknownLocale
  }
}

type TBearsStaticProps = {
  state: State
}

type TBearsParams = ParsedUrlQuery & {
  locale: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/ja/bears', '/en/bears'],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<TBearsStaticProps, TBearsParams> = async ({ params }) => {
  const locale = getLocale(params?.locale)

  return {
    props: {
      state: {
        page: {
          locale
        }
      }
    }
  }
}

const BearCollectionPage: NextPage<BearCollectionPageProps> = ({
  state: {
    page: { locale }
  }
}) => {
  if (locale === undefined || locale === typeof UnknownLocale || typeof locale !== 'string') {
    return <ErrorPage statusCode={404} />
  }

  const path = typeof locale === 'string' ? '/${locale}/bears' : '/ja/bears'

  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: locale as 'en' | 'ja', path }}>
      <Pages.BearsPage />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default BearCollectionPage
