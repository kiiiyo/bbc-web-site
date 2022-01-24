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
          <Organisms.HeroAbout />
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
