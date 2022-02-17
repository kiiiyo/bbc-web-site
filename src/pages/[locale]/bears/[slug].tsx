import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import ErrorPage from 'next/error'
//
import { Domain, Context, Usecase } from '@/features'
import { Pages } from '@/components'
import { getLocale, UnknownLocale } from '@/utils/translations/locales'

type BearSinglePageProps = InferGetStaticPropsType<typeof getStaticProps>

type State = {
  page: {
    locale?: string | typeof UnknownLocale
    collection: Domain.Bear.Collection | null
    content: null
  }
}

type TBearStaticProps = {
  state: State
}

type TBearParams = ParsedUrlQuery & {
  locale: string
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: 切り出す
  const availableLocales = ['ja', 'en']
  const slugs = ['neo', 'moo', 'smith', 'oracle', 'link', 'thomas', 'trinity', 'dujour']
  const paths = availableLocales.map((local) => slugs.map((slug) => `/${local}/bears/${slug}`))

  return {
    // TODO: うまくなおす
    paths: paths[0].concat(paths[1]),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<TBearStaticProps, TBearParams> = async ({ params }) => {
  const locale = getLocale(params?.locale)
  let collection = null
  const content = null

  if (locale === 'ja' || locale === 'en') {
    collection = await Usecase.Bear.bearCollection({ locale })
    //bearDetail = await Usecase.Bear.bearCollection({ locale })
  }

  return {
    props: {
      state: {
        page: {
          locale,
          content,
          collection
        }
      }
    }
  }
}

const BearSinglePage: NextPage<BearSinglePageProps> = ({
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
      <Pages.BearSinglePage state={{ collection }} />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default BearSinglePage
