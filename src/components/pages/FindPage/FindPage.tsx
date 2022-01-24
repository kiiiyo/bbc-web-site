import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

type State = {}

export type FindPageProps = {
  state: State
}

export const FindPage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      FindPage
    </Templates.GenericTemplate>
  )
}
