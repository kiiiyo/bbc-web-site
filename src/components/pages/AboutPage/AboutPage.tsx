import { FC } from 'react'
//
import { Templates, Organisms, Molecules } from '@/components'

type State = {}

export type AboutPageProps = {
  state: State
}

export const AboutPage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      <section>
        <div className=" bg-slate-50">
          <Organisms.Hero
            state={{
              title: (
                <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
                  <span className="inline-block mr-3">🐻</span>
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    About
                  </span>
                </h1>
              ),
              description: 'Here are the BitBears.'
            }}
          />
          <div className="container px-6 mx-auto ">
            <div className="pb-20">
              <Molecules.AboutNeo />
              <Molecules.AboutMoo />
              <Molecules.AboutSmith />
              <Molecules.AboutOracle />
            </div>
          </div>
        </div>
      </section>
    </Templates.GenericTemplate>
  )
}
