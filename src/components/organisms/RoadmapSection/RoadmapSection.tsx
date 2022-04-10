import { FC } from 'react'
import Image from 'next/image'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

type State = {
  language: TLanguage
}

export type RoadmapSectionPresenterProps = {
  state: State
}

export const RoadmapSectionPresenter: FC<RoadmapSectionPresenterProps> = ({ state: { language } }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col mx-auto mt-8 w-full md:mt-16 lg:flex-row-reverse">
          <div className="object-cover object-center rounded-lg md:mt-0 lg:w-3/5">
            <Image
              src="/assets/images/mainvisual-roadmap.png"
              alt="Roadmap"
              className="rounded-lg"
              width={1200}
              height={630}
            />
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
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.roadmapPage.section.q1.title}
                </h3>
                <ul>
                  <li>{language.page.roadmapPage.section.q1.objectives[0]}</li>
                  <li>{language.page.roadmapPage.section.q1.objectives[1]}</li>
                  <li>{language.page.roadmapPage.section.q1.objectives[2]}</li>
                  <li>{language.page.roadmapPage.section.q1.objectives[3]}</li>
                  <li>{language.page.roadmapPage.section.q1.objectives[4]}</li>
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
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.roadmapPage.section.q2.title}
                </h3>
                <ul>
                  <li>{language.page.roadmapPage.section.q2.objectives[0]}</li>
                  <li>{language.page.roadmapPage.section.q2.objectives[1]}</li>
                  <li>{language.page.roadmapPage.section.q2.objectives[2]}</li>
                  <li>{language.page.roadmapPage.section.q2.objectives[3]}</li>
                  <li>{language.page.roadmapPage.section.q2.objectives[4]}</li>
                </ul>
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
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.roadmapPage.section.q3.title}
                </h3>
                <p className="leading-relaxed">{language.page.roadmapPage.section.q3.objectives[0]}</p>
              </div>
            </div>
            <div className="flex relative">
              <div className="inline-flex relative z-10 shrink-0 justify-center items-center w-10 h-10 text-white bg-gradient-to-r from-rose-500 via-red-400 to-red-500 rounded-full">
                <Atoms.FlagIcon className="w-5 h-5" />
              </div>
              <div className="grow pl-4">
                <h2 className="mb-1 text-3xl font-bold tracking-wider text-gray-900">Q4</h2>
                <h3 className="mb-1 text-xl font-bold tracking-wider text-gray-900">
                  {language.page.roadmapPage.section.q4.title}
                </h3>
                <ul>
                  <li>{language.page.roadmapPage.section.q4.objectives[0]}</li>
                  <li>{language.page.roadmapPage.section.q4.objectives[1]}</li>
                  <li>{language.page.roadmapPage.section.q4.objectives[2]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const RoadmapSection: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return (
    <RoadmapSectionPresenter
      state={{
        language
      }}
    />
  )
}

export default RoadmapSection
