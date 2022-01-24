import { FC } from 'react' //
import Image from 'next/image'
//
import styles from './HeroHome.module.scss'

export const HeroHome: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.smallStars}></div>
      <div className={styles.mediumStars}></div>
      <div className={styles.bigStars}></div>
      <div className="container mx-auto">
        <div className="py-6 text-center md:py-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Hellow, Crypto World!
            </span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="px-6 mb-8 text-xl text-white">
              A collector&apos;s NFT item project of bears using pixel art.
            </p>
          </div>
          <div className="overflow-hidden relative z-10 justify-items-center items-center mx-auto w-24 h-24 rounded-full border-2 border-gray-400">
            <Image
              src="/assets/images/hero-image.gif"
              alt="BitBear Neo"
              className="object-cover"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
