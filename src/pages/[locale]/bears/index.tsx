import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import ErrorPage from 'next/error'
//
import { Domain, Context, Usecase } from '@/features'
import { Pages } from '@/components'
import { getLocale, UnknownLocale } from '@/utils/translations/locales'

type TBearCollectionPageProps = InferGetStaticPropsType<typeof getStaticProps>

type State = {
  page: {
    locale?: string | typeof UnknownLocale
    collection: Domain.Bear.TCollection | null
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
  let collection = null

  if (locale === 'ja' || locale === 'en') {
    collection = await Usecase.Bear.bearCollection({ locale })
  }

  return {
    props: {
      state: {
        page: {
          locale,
          collection
        }
      }
    }
  }
}

const BearCollectionPage: NextPage<TBearCollectionPageProps> = ({
  state: {
    page: { locale, collection }
  }
}) => {
  if (locale === undefined || locale === typeof UnknownLocale) {
    return <ErrorPage statusCode={404} />
  }

  const path = typeof locale === 'string' ? '/${locale}/bears' : '/ja/bears'

  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: locale as 'en' | 'ja', path }}>
      <Pages.BearCollectionPage state={{ collection }} />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default BearCollectionPage
