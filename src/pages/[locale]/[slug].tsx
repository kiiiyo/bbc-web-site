import type { NextPage } from 'next'
import ErrorPage from 'next/error'

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
  try {
    return {
      props: {
        state: { page }
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/404'
      },
      props: {
        state: { page: undefined }
      }
    }
  }
})

const LandingPage: NextPage<LandingPageProps> = ({ state: { page } }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }
  console.log(page)
  return <Pages.HomePage />
}

export default LandingPage
