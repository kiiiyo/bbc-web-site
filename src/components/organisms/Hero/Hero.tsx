import { FC, ReactNode } from 'react' //
//
import styles from './Hero.module.scss'

type THeroProps = {
  state: {
    title?: ReactNode
    description?: string
    image?: ReactNode
  }
}

export const Hero: FC<THeroProps> = ({ state: { title, description, image } }) => {
  return (
    <div className={styles.root}>
      <div className={styles.smallStars}></div>
      <div className={styles.mediumStars}></div>
      <div className={styles.bigStars}></div>
      <div className="container mx-auto">
        <div className="py-12 text-center md:py-20">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tighter md:text-6xl">{title}</h1>
          {description && (
            <div className="mx-auto max-w-3xl">
              <p className="px-12 text-xl text-white">{description}</p>
            </div>
          )}
          {image}
        </div>
      </div>
    </div>
  )
}
