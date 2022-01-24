import { FC } from 'react' //
//
import styles from './HeroAbout.module.scss'

export const HeroAbout: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.smallStars}></div>
      <div className={styles.mediumStars}></div>
      <div className={styles.bigStars}></div>
      <div className="container mx-auto">
        <div className="py-6 text-center md:py-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">About</span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="px-6 mb-8 text-xl text-white">Here are the BitBears.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
