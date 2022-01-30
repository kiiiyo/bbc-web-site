import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Atoms } from '@/components'

export type THomeCampaignProps = {
  state: {
    link: string
  }
}

export const HomeCampaign: FC<THomeCampaignProps> = ({ state: { link } }) => {
  return (
    <section>
      <div className="container py-8 px-6 mx-auto md:py-16">
        <div>
          <div className="text-center">
            <p className="font-bold">🎉 キャンペーン🎉</p>
            <h2 className=" text-3xl font-bold">🎁 Giveaway Event 🎁</h2>
            <p className="mt-4">
              オフィシャルサイトオープン記念、サイト内に隠れているベーリーを見つけると抽選でNFTがもらえるイベントを実施中です！
            </p>
          </div>
          <div className="object-cover object-top overflow-hidden mx-auto mt-8 w-full rounded md:mt-16 md:h-80 lg:object-center lg:w-1/2">
            {/* Lang */}

            <Image
              alt="Find Beary"
              className="rounded-lg"
              src="/assets/images/mainvisual-home-beary.png"
              layout={'responsive'}
              width={1200}
              height={630}
            />
          </div>
          <div className="mt-8 md:flex md:justify-center md:mt-16">
            <Link href={link}>
              <a
                target="_blank"
                className="inline-flex items-center py-3 px-5 mx-auto text-lg leading-5 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 md:mx-0"
              >
                <span>このページにいるかも</span>
                <Atoms.ArrowSmRightIcon className="ml-2 w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
