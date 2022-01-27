import { TLanguage } from '@/types/language'
export const language: TLanguage = {
  common: {
    meta: {
      title: 'BitBearClub',
      description: 'BitBearClubは🐻 クマをモチーフにしたピクセルアートをNFTの世界に届けるコレクターズプロジェクトです。'
    },
    headerMenu: {
      home: 'ホーム',
      about: 'ボク達について',
      roadmap: 'ロードマップ',
      find: '見つける'
    },
    footerMenu: {
      home: 'ホーム',
      about: 'ボク達について',
      roadmap: 'ロードマップ',
      find: '見つける'
    }
  },
  page: {
    homePage: {
      hero: {
        title: 'Hellow, Crypto World!',
        // prettier-ignore
        description: 'BitBearClubは🐻 クマをモチーフにしたピクセルアートをNFTの世界に届けるコレクターズプロジェクトです。'
      }
    },
    roadmapPage: {
      hero: {
        title: 'ロードマップ',
        // prettier-ignore
        description: 'BitBearClubが目標にしているロードマップをご紹介します。'
      },
      section: {
        q1: {
          title: '期間: 1月 - 3月',
          objectives: [
            '【🎉 】 Bit Bear Club official site open .',
            '【🏃】 Bit Bear Avatar Series NFT item 512 drop.',
            '【🏃】 Bit Bear New Series NFT item 64 drop.',
            '【🏃】 Twitter Follower 1000.',
            '【🏃】 OpenSea Volume Trade 0.1.'
          ]
        },
        q2: {
          title: '期間: 4月 - 6月',
          // prettier-ignore
          objectives: ['【🤔 】I\'m thinking about it.']
        },
        q3: {
          title: '期間: 7月 - 9月',
          // prettier-ignore
          objectives: ['【🤔 】I\'m thinking about it.']
        },
        q4: {
          title: '期間: 10月 - 12月',
          objectives: [
            '【🏃】 Bit Bear Cloub NFT Total drop 4096 . (😝 Maybe)',
            '【🏃】 Twitter Follower 10000. - (😝 Maybe)',
            '【🏃】 OpenSea Volume Trade 1.0. - (😝 Maybe)'
          ]
        }
      }
    },
    searchPage: {
      hero: {
        title: '見つける',
        description: 'あなたのお気に入り 🐻 BitBearを見つけよう!'
      }
    }
  }
}
