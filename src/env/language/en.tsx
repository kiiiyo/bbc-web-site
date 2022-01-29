import { TLanguage } from '@/types/language'
export const language: TLanguage = {
  common: {
    meta: {
      title: 'BitBearClub',
      // prettier-ignore
      description: 'A collector\'s NFT item project of bears using pixel art.'
    },
    headerMenu: {
      home: 'Home',
      about: 'About',
      roadmap: 'Roadmap',
      find: 'Find'
    },
    footerMenu: {
      home: 'Home',
      about: 'About',
      roadmap: 'Roadmap',
      find: 'Find'
    }
  },
  page: {
    homePage: {
      title: 'Home',
      hero: {
        title: 'Hellow, Crypto World!',
        // prettier-ignore
        description: 'A collector\'s NFT item project of bears using pixel art.'
      }
    },
    aboutPage: {
      title: 'About'
    },
    roadmapPage: {
      title: 'Roadmap',
      hero: {
        title: 'Roadmap',
        // prettier-ignore
        description: 'Here is the roadmap that this Bit Bear Club is working towards.'
      },
      section: {
        q1: {
          title: 'Term: Jan - Mar',
          objectives: [
            '【🎉 】 Bit Bear Club official site open .',
            '【🏃】 Bit Bear Avatar Series NFT item 512 drop.',
            '【🏃】 Bit Bear New Series NFT item 64 drop.',
            '【🏃】 Twitter Follower 1000.',
            '【🏃】 OpenSea Volume Trade 0.1.'
          ]
        },
        q2: {
          title: 'Term: Apr - Jun',
          // prettier-ignore
          objectives: ['【🤔 】I\'m thinking about it.']
        },
        q3: {
          title: 'Term: Jul - Sep',
          // prettier-ignore
          objectives: ['【🤔 】I\'m thinking about it.']
        },
        q4: {
          title: 'Term: Oct - Dec',
          objectives: [
            '【🏃】 Bit Bear Cloub NFT Total drop 4096 . (😝 Maybe)',
            '【🏃】 Twitter Follower 10000. - (😝 Maybe)',
            '【🏃】 OpenSea Volume Trade 1.0. - (😝 Maybe)'
          ]
        }
      }
    },
    findPage: {
      title: 'Find',
      hero: {
        title: 'Find',
        description: 'Find your favorite 🐻 BitBear!'
      },
      section: {
        title: 'Find 🐻 BitBear',
        content: {
          step1: {
            title: 'Step1',
            description: (
              <>
                <strong>「See the bord」</strong> Click.
              </>
            )
          },
          step2: {
            title: 'Step2',
            description: (
              <>
                Click on the image of Opensea icon your favorite 🐻 <strong>BitBear</strong> to see more details.
              </>
            )
          },
          campaign: {
            title: '🎁 Giveaway Campaign 🎉',
            description: (
              <>We&#39;re running a campaign to find Baily! The first 64 people to arrive will giveaway an NFT</>
            )
          }
        }
      }
    },
    campaignPage: {
      title: 'Find',
      hero: {
        title: 'They found us.'
      },
      section: {
        content: {
          bearName: 'Baily',
          description: <>Thank you for finding me. I&#39;ll giveaway you a picture for your avatar.</>,
          requirement: {
            title: 'Requirement',
            lists: ['✅ You need to a Twitter account.', '✅ You need to a OpenSea account.']
          },
          term: {
            title: 'Term',
            description: '2022.02.01 - 2022.02.06'
          }
        },
        twitter: {
          title: 'Follow me on Twitter.',
          description: <>I hope you&#39;ll follow these two Twitter accounts.</>
        },
        form: {
          title: '✍️Answer the form',

          secretWord: 'Secret word is 👉【I found Baily.】',
          description: <>Please fill out this Google form.</>,
          url: 'https://bit.ly/3G7uUyG'
        },
        openSea: {
          title: 'I will DM the winner 💌.',
          description: (
            <>
              You will receive a DM reply from the BitBearClub. If it is sent successfully, it will be sent to the{' '}
              <strong>Hidden</strong> tab of the OpenSea profile.
            </>
          )
        }
      }
    }
  }
}
