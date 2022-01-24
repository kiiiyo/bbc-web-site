import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

type State = {}

export type RoadmapProps = {
  state: State
}

export const RoadmapPage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      Roadmap
    </Templates.GenericTemplate>
  )
}
