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
      },
      section: {
        about: {
          title: 'Welcome🐻🙌',
          description: (
            <>
              Welcome to the official BitBearClub website! The BitBears on this site are 🎓 students studying art and
              design at 🎨 NFT Art College in 🌏 Crypto World . They are very expressive✨ and cute. They are very
              expressive✨ and cute💕. They are very expressive and cute.
            </>
          ),

          buttonLabel: 'More'
        },
        campaign: {
          title: '🎉 Campaign 🎉',
          subTitle: '🎁 Giveaway Event 🎁',
          description:
            'To celebrate the opening of the official site, we are holding an event where you can win NFTs by drawing lots when you find the hidden Baileys in the site!',
          buttonLabel: 'He could be on this page.'
        }
      }
    },
    aboutPage: {
      title: 'About',
      hero: {
        title: 'About',
        description: 'Here are the BitBears.'
      },
      section: {
        neo: {
          name: 'Neo',
          description: (
            <>
              Neo is a first year student at NFT Art College from 🇮🇸 Iceland Server. He is a 🎨 pixel art major. 🤩
              talkative, 🍭 foodie, 😝 and a bit of a doofus.The other BitBears seem to love Neo as their little
              brother.
            </>
          )
        },
        moo: {
          name: 'Moo',
          description: (
            <>
              Moo is an Alaskan brown bear who is a sophomore at NFT Art College attending from 🇨🇦 Canada Server.
              He&#39;s majoring in oil painting, and he&#39;s got a generous and laid-back personality. Always🍁
              He&#39;s always in class ✍️ with a handful of maple syrup.
            </>
          )
        },
        smith: {
          name: 'Smith',
          description: (
            <>
              Smith is a black bear who is a sophomore at NFT Art College attending from 🇯🇵 Japan Server. He&#39;s
              majoring in wood craft. Always 🐟 salmon in his mouth all the time, and he&#39;s a bit of a 🔫
              troublemaker with a free-spirited personality.He&#39;s a bit of a troublemaker, but he&#39;s also very
              loyal to his friends. He&#39;s a hard guy to hate.
            </>
          )
        },
        oracle: {
          name: 'Oracle',
          description: (
            <>
              Oracle is a second year panda at NFT Art College attending from 🇨🇳 China Server. He&#39;s majoring in
              digital art, including 3DCG and VFX. He&#39;s a little quiet and always 🖥️ staring at his computer, but on
              his days off he&#39;s a kind-hearted guy who cooks Chinese food for everyone. He&#39;s a bit quiet and
              always staring at his computer, but on his days off he&#39;s a kind-hearted guy who cooks Chinese food for
              everyone.
            </>
          )
        }
      }
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
