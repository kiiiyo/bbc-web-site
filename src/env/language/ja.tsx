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
      title: 'ホーム',
      hero: {
        title: 'Hellow, Crypto World!',
        // prettier-ignore
        description: 'BitBearClubは🐻 クマをモチーフにしたピクセルアートをNFTの世界に届けるコレクターズプロジェクトです。'
      }
    },
    aboutPage: {
      title: 'ボク達について'
    },
    roadmapPage: {
      title: 'ロードマップ',
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
    findPage: {
      title: '見つける',
      hero: {
        title: '見つける',
        description: 'あなたのお気に入り 🐻 BitBearを見つけよう'
      },
      section: {
        title: '🐻 BitBearの見つけ方',
        content: {
          step1: {
            title: 'ステップ1',
            description: (
              <>
                <strong>「See the bord」</strong> をクリックします。
              </>
            )
          },
          step2: {
            title: 'ステップ2',
            description: (
              <>
                この森の中にいる🐻 <strong>BitBear</strong>{' '}
                の画像にOpenSeaのアイコンをクリックするとOpenSeaの詳細ページが見れます。
              </>
            )
          },
          campaign: {
            title: '🎁 Giveaway キャンペーン開催中 🎉',
            description: (
              <>
                <strong>先着64名様</strong>にBitBear NFT Giveaway
                キャンペーン開催中。この森の中のベーリーという熊さんが応募方法を教えてくれるよ。{' '}
              </>
            )
          }
        }
      }
    },
    campaignPage: {
      title: '見つかっちゃった',
      hero: {
        title: '見つかっちゃった'
      },
      section: {
        content: {
          bearName: 'ベーリー',
          description: (
            <>
              ボクを見つけてくれてありがとう。アバター用NFT画像を🎁 <strong>Giveaway</strong>するよ。
            </>
          ),
          requirement: {
            title: '参加条件',
            lists: ['✅  Twitterアカウントを持っている', '✅  OpenSeaアカウントを持っている']
          },
          term: {
            title: '開催期間',
            description: '2022年02月01日(火) から 2022年02月06日(日) まで'
          }
        },
        twitter: {
          title: 'Twitterをフォロー',
          description: 'この２つのTwitterアカウントをフォローしてもらえると嬉しいな🥰'
        },
        form: {
          title: '✍️フォームに回答',
          secretWord: (
            <>
              <strong>【秘密の合言葉】</strong>は👉 <strong>【ベーリー見つけた】</strong>
            </>
          ),
          description: <>こちらのGoogleフォームにご回答ください。</>,
          url: 'https://bit.ly/3r6Qi2u'
        },
        openSea: {
          title: '当選者に💌 DMします',
          description: (
            <>
              @BitBearClubからTwitterに当選のDMがあります。正常におくられるとOpenSeaのProfileの<strong>Hidden</strong>
              タブに送られます。
            </>
          )
        }
      }
    }
  }
}
