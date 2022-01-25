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
      <Organisms.Hero
        state={{
          title: (
            <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
              <span className="inline-block mr-3">🔍</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Find
              </span>
            </h1>
          ),
          description: 'Find your favorite 🐻 BitBear!'
        }}
      />
      <Organisms.FindSection />
    </Templates.GenericTemplate>
  )
}
