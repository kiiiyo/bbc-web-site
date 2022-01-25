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
          <Organisms.Hero
            state={{
              title: (
                <>
                  <span className="inline-block mr-3">🏃</span>
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Roadmap
                  </span>
                </>
              ),
              description: 'Here is the roadmap that this Bit Bear Club is working towards.'
            }}
          />
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
