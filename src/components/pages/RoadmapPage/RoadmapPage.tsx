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
      <section>
        <div className=" bg-slate-50">
          <Organisms.HeroRoadmap />
          <div className="container px-6 mx-auto ">
            <div className="pb-20">
              <Organisms.RoadmapSection />
            </div>
          </div>
        </div>
      </section>
    </Templates.GenericTemplate>
  )
}
