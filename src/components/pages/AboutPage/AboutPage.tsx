import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

type State = {}

export type AboutPageProps = {
  state: State
}

export const AboutPage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      AboutPage
    </Templates.GenericTemplate>
  )
}
