import { FC } from 'react'
import Image from 'next/image'
//
import { TLanguage } from '@/types/language'
import { Hooks } from '@/features'
import { Templates, Organisms } from '@/components'

export type TCampaignPagePresenterProps = {
  state: {
    language: TLanguage
  }
}

export const CampaignPagePresenter: FC<TCampaignPagePresenterProps> = ({ state: { language } }) => {
  return (
    <Templates.GenericTemplate globalHeader={<Organisms.Header />} globalFooter={<Organisms.Footer />}>
      <div className=" bg-slate-50">
        <Organisms.Hero
          state={{
            title: (
              <>
                <span className="inline-block mr-3">🔍</span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-200">
                  {language.page.campaignPage.hero.title}
                </span>
              </>
            ),
            image: (
              <div className="overflow-hidden relative z-10 justify-items-center items-center mx-auto mt-6 w-24 h-24 rounded-full border-2 border-gray-400">
                <Image
                  src="/assets/images/avatar-baily.png"
                  alt="BitBear Neo"
                  className="object-cover"
                  width="100%"
                  height="100%"
                />
              </div>
            )
          }}
        />
        <div className="container px-6 mx-auto ">
          <div className="pb-20">
            <Organisms.CampaignSection />
          </div>
        </div>
      </div>
    </Templates.GenericTemplate>
  )
}

export const CampaignPage: FC = () => {
  const {
    state: { language }
  } = Hooks.Locale.useLocaleContext()

  return <CampaignPagePresenter state={{ language }} />
}

export default CampaignPage
