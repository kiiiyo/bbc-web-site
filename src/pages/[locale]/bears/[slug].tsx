import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import ErrorPage from 'next/error'
//
import { Domain, Context, Usecase } from '@/features'
import { Pages } from '@/components'
import { getLocale, UnknownLocale } from '@/utils/translations/locales'

type TBearSinglePageProps = InferGetStaticPropsType<typeof getStaticProps>

type State = {
  page: {
    locale?: string | typeof UnknownLocale
    collection: Domain.Bear.TCollection | null
    bear: Domain.Bear.TEntity | null
  }
}

type TBearStaticProps = {
  state: State
}

type TBearParams = ParsedUrlQuery & {
  locale: string
  slug: Domain.Bear.TBearNameSlug
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: 切り出す
  const availableLocales = ['ja', 'en']
  const slugs = ['neo', 'moo', 'smith', 'oracle', 'link', 'thomas', 'trinity', 'dujour', 'bearly']
  const paths = availableLocales.map((local) => slugs.map((slug) => `/${local}/bears/${slug}`))

  return {
    // TODO: きれいにする
    paths: paths[0].concat(paths[1]),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<TBearStaticProps, TBearParams> = async ({ params }) => {
  const locale = getLocale(params?.locale)
  const slug = params?.slug
  let collection = null
  let bear = null

  if (locale === 'ja' || locale === 'en') {
    collection = await Usecase.Bear.bearCollection({ locale })
    //bearDetail = await Usecase.Bear.bearCollection({ locale })
  }

  if (slug && (locale === 'ja' || locale === 'en')) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bear = await Usecase.Bear.bearSingle({ locale, slug })
  }

  return {
    props: {
      state: {
        page: {
          locale,
          bear,
          collection
        }
      }
    }
  }
}

const BearSinglePage: NextPage<TBearSinglePageProps> = ({
  state: {
    page: { locale, collection, bear }
  }
}) => {
  if (locale === undefined || locale === typeof UnknownLocale) {
    return <ErrorPage statusCode={404} />
  }
  if (bear === null) {
    return <ErrorPage statusCode={404} />
  }

  const path = typeof locale === 'string' ? '/${locale}/bears' : '/ja/bears'

  return (
    <Context.LocaleContext.LocaleContextProvider value={{ locale: locale as 'en' | 'ja', path }}>
      <Pages.BearSinglePage state={{ collection, bear }} />
    </Context.LocaleContext.LocaleContextProvider>
  )
}

export default BearSinglePage
