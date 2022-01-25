import { FC } from 'react'
import Image from 'next/image'
//
import { Atoms } from '@/components'

export const RoadmapSection: FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col mx-auto mt-8 w-full md:mt-16 lg:flex-row-reverse">
          <div className="object-cover object-center rounded-lg md:mt-0 lg:w-3/5">
            <Image src="https://dummyimage.com/1200x630" alt="step" width={1200} height={630} />
          </div>
          <div className="mt-6 md:py-6 md:pr-10 md:mt-0 lg:w-2/5">
            <h2 className="mb-6 text-4xl font-bold tracking-wider text-gray-900">🚀 2022</h2>
            <div className="flex relative pb-12">
              <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">Q1</h2>
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Term: Jan - Mar</h3>
                <ul>
                  <li>【🎉 】 Bit Bear Club official site open .</li>
                  <li>
                    【🏃】 Bit Bear Avatar Series NFT item <strong>512</strong> drop.
                  </li>
                  <li>
                    【🏃】 Bit Bear New Series NFT item <strong>64</strong> drop.
                  </li>
                  <li>
                    【🏃】 Twitter Follower <strong>1000</strong>.
                  </li>
                  <li>
                    【🏃】 OpenSea Volume Trade <strong>0.1</strong>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex relative pb-12">
              <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-emerald-500 to-lime-600 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">Q2</h2>
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Term: Apr - Jun</h3>
                <p className="leading-relaxed">【🤔 】I&apos;m thinking about it.</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="flex absolute inset-0 justify-center items-center w-10 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-b from-orange-500 to-yellow-300 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">Q3</h2>
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Term: Jul - Sep</h3>
                <p className="leading-relaxed">【🤔 】 I&apos;m thinking about it.</p>
              </div>
            </div>
            <div className="flex relative">
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-rose-500 via-red-400 to-red-500 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">Q4</h2>
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">Term: Oct - Dec</h3>
                <ul>
                  <li>
                    【🏃】 Bit Bear Cloub NFT Total drop <strong>4096</strong> . (😝 Maybe)
                  </li>
                  <li>
                    【🏃】 Twitter Follower <strong>10000</strong>. - (😝 Maybe)
                  </li>
                  <li>
                    【🏃】 OpenSea Volume Trade <strong>1.0</strong>. - (😝 Maybe)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
