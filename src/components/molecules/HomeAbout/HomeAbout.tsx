import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//
import { Atoms } from '@/components'

export const HomeAbout: FC = () => {
  return (
    <div className="border-b-2 border-gray-200 border-solid">
      <div className="container py-8 px-6 mx-auto md:py-16">
        <div className="flex flex-col mx-auto lg:flex-row lg:w-4/5">
          <div className="object-cover object-top overflow-hidden w-full h-64 rounded lg:object-center lg:w-1/2 lg:h-auto">
            <Image
              alt="Bit Bear Club"
              className="rounded-lg"
              src="/assets/images/ogp.png"
              layout={'responsive'}
              width={1200}
              height={630}
            />
          </div>
          <div className="w-full lg:pl-10 lg:mt-0 lg:w-1/2">
            <h1 className="mt-8 text-4xl font-medium text-gray-900 md:mt-4">ようこそ！</h1>
            <p className="mt-6 break-words">TextTextTextTextTextTextTextTextTextTextTextTextText</p>

            <Link href="https://opensea.io/assets/bit-bear-club-avatar-series?search[stringTraits][0][name]=Name&search[stringTraits][0][values][0]=Neo&search[sortAscending]=true&search[sortBy]=PRICE">
              <a
                target="_blank"
                className="inline-flex items-center py-3 px-5 mx-1 mt-8 text-lg leading-5 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 md:mx-0 md:mt-16"
              >
                <span>BitBearもっと知る</span>
                <Atoms.ArrowSmRightIcon className="ml-4 w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
