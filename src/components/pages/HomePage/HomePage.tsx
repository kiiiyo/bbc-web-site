import { FC } from 'react'
import Image from 'next/image'
//
import { Templates, Organisms } from '@/components'

type State = {}

export type HomePageProps = {
  state: State
}

export const HomePage: FC = () => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      <Organisms.Hero
        state={{
          title: (
            <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Hellow, Crypto World!
              </span>
            </h1>
          ),
          description: 'A collector&apos;s NFT item project of bears using pixel art.',
          image: (
            <div className="overflow-hidden relative z-10 justify-items-center items-center mx-auto w-24 h-24 rounded-full border-2 border-gray-400">
              <Image
                src="/assets/images/hero-image.gif"
                alt="BitBear Neo"
                className="object-cover"
                width="100%"
                height="100%"
              />
            </div>
          )
        }}
      />
    </Templates.GenericTemplate>
  )
}
