import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//

export type State = {
  bearName: string
  seriesName: string
  seriesDescription: string
  collectionUrl: string
  imageUrl: string
}

export type TSeriesItemProps = {
  state: State
}

export type TSeriesItemPresenterProps = {
  state: State
}

export const SeriesItem: FC<TSeriesItemProps> = ({ state }) => {
  return <SeriesItemPresenter state={state} />
}

export const SeriesItemPresenter: FC<TSeriesItemPresenterProps> = ({
  state: { imageUrl, bearName, seriesName, seriesDescription, collectionUrl }
}) => {
  return (
    <div className="flex flex-row p-4 mt-4 rounded-lg border-2 border-gray-200">
      <div className="mr-6 w-32 h-32">
        <Image
          alt={bearName}
          src={imageUrl}
          className="m-0 w-full h-full"
          layout={'responsive'}
          width="100%"
          height="100%"
        />
      </div>
      <div className="grow">
        <h2 className="mb-2 text-2xl font-bold text-neutral-900">{seriesName}</h2>
        <p className="text-base leading-relaxed">{seriesDescription}</p>
        <Link href={collectionUrl}>
          <a className="inline-flex items-center mt-4 font-bold underline cursor-pointer" target="_blank">
            👉 Check Opensea
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SeriesItem
