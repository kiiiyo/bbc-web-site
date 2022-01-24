import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

type State = {}

export type HomePageProps = {
  state: State
}

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      <Organisms.HeroHome />
    </Templates.GenericTemplate>
  )
}
