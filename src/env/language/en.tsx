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
          title: 'Welcome๐ป๐',
          description: (
            <>
              Welcome to the official BitBearClub website! The BitBears on this site are ๐๐ป students studying art and
              design at ๐จ NFT Art College in ๐ Crypto World . They are very expressiveโจ and cute๐.
            </>
          ),

          buttonLabel: 'More'
        },
        campaign: {
          title: '๐ Campaign ๐',
          subTitle: '๐ Giveaway Event ๐',
          description:
            'To celebrate the opening of the official site, we are holding an event where you can win NFTs by drawing lots when you find the hidden Bearly in the site!',
          buttonLabel: 'He could be on this page.',
          currentOwner: (
            <>
              We&#39;ve been welcomed by the owner, who has <strong className="text-xl font-bold"> 40 </strong> ๐ป
              Beary.
            </>
          ),
          currentPeople: '24 people left.'
        }
      }
    },
    aboutPage: {
      title: 'BitBear',
      hero: {
        title: 'BitBear',
        description: 'Here are the BitBears.'
      },
      section: {
        neo: {
          name: 'Neo',
          description: (
            <>
              Neo is a first year student at <strong>NFT Art College</strong> from ๐ฎ๐ธ Iceland Server. He is a ๐จ pixel
              art major. ๐คฉ talkative, ๐ญ foodie, ๐ and a bit of a doofus.The other BitBears seem to love Neo as their
              little brother.
            </>
          )
        },
        moo: {
          name: 'Moo',
          description: (
            <>
              Moo is an Alaskan brown bear who is a sophomore at <strong>NFT Art College</strong> attending from ๐จ๐ฆ
              Canada Server. He&#39;s majoring in oil painting, and he&#39;s got a generous and laid-back personality.
              Always๐ He&#39;s always in class โ๏ธ with a handful of maple syrup.
            </>
          )
        },
        smith: {
          name: 'Smith',
          description: (
            <>
              Smith is a black bear who is a sophomore at <strong>NFT Art College</strong> attending from ๐ฏ๐ต Japan
              Server. He&#39;s majoring in wood craft. Always ๐ salmon in his mouth all the time, and he&#39;s a bit of
              a ๐ซ troublemaker with a free-spirited personality.He&#39;s a bit of a troublemaker, but he&#39;s also
              very loyal to his friends. He&#39;s a hard guy to hate.
            </>
          )
        },
        oracle: {
          name: 'Oracle',
          description: (
            <>
              Oracle is a second year panda at <strong>NFT Art College</strong> attending from ๐จ๐ณ China Server. He&#39;s
              majoring in digital art, including 3DCG and VFX. He&#39;s a little quiet and always ๐ฅ๏ธ staring at his
              computer, but on his days off he&#39;s a kind-hearted guy who cooks ๐ฅ Chinese food for everyone.
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
            '๐ Bit Bear Club official site open .',
            '๐ Bit Bear Avatar Series NFT item 512 drop.',
            '๐ Bit Bear New Series NFT item 64 drop.',
            '๐ Twitter Follower 1000.',
            '๐ OpenSea Volume Trade 0.1.'
          ]
        },
        q2: {
          title: 'Term: Apr - Jun',
          // prettier-ignore
          objectives: [
            '๐ NFT Bear Verse Service Launch',
            '๐ Bit Bear Avatar Series NFT item 512 drop.',
            '๐ Bit Bear Graffiti Series NFT item 64 drop.',
            '๐ Bit Bear PFPs Series NFT item 64 drop.',
            '๐ OpenSea Volume Trade 0.1.'
          ]
        },
        q3: {
          title: 'Term: Jul - Sep',
          // prettier-ignore
          objectives: ['๐ค I\'m thinking about it.']
        },
        q4: {
          title: 'Term: Oct - Dec',
          objectives: [
            '๐ Bit Bear Cloub NFT Total drop 4096 . (๐ Maybe)',
            '๐ Twitter Follower 10000. - (๐ Maybe)',
            '๐ OpenSea Volume Trade 1.0. - (๐ Maybe)'
          ]
        }
      }
    },
    findPage: {
      title: 'Find',
      hero: {
        title: 'Find',
        description: 'Find your favorite ๐ป BitBear!'
      },
      section: {
        title: 'Find ๐ป BitBear',
        content: {
          step1: {
            title: 'Step1',
            description: (
              <>
                Click on the orange icon your favorite ๐ป <strong>BitBear</strong> to see more details.
              </>
            )
          },
          step2: {
            title: 'Step2',
            description: (
              <>
                Click on <strong>ใFind BitBearใ</strong> and select <strong>ใSee the bordใ</strong>.
              </>
            ),
            buttonLabel: 'Find BitBear'
          },
          campaign: {
            title: '๐ Giveaway Campaign ๐',
            description: (
              <>
                The BitBear NFT Giveaway campaign is underway with 64 winners drawn.
                <strong>A bear named ๐ป Bearly in the woods will tell you how to enter.</strong>
              </>
            ),
            currentPeople: '24 people left.',
            currentOwner: (
              <>
                We&#39;ve been welcomed by the owner, who has <strong className="text-xl font-bold"> 40 </strong> ๐ป
                Beary.
              </>
            ),
            requirement: {
              title: 'Requirement',
              list: ['โ You have a Twitter account.', 'โ You have a OpenSea account.']
            }
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
          bearName: 'Bearly',
          description: <>Thank you for finding me. I&#39;ll giveaway you a picture for your avatar.</>,
          requirement: {
            title: 'Requirement',
            lists: ['โ You need to a Twitter account.', 'โ You need to a OpenSea account.']
          },
          term: {
            title: 'Term',
            description: '2022.02.01 - 2022.02.28'
          }
        },
        twitter: {
          title: 'Follow me on Twitter.',
          description: <>I hope you&#39;ll follow these two Twitter accounts.</>
        },
        form: {
          title: 'โ๏ธAnswer the form',

          secretWord: 'Secret word is ๐๐๐ใI found Bearly.ใ๐๐๐',
          description: <>Please fill out this Google form.</>,
          url: 'https://bit.ly/3G7uUyG'
        },
        openSea: {
          title: 'I will DM the winner ๐.',
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
