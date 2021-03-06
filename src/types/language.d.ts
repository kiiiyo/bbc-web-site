import { ReactNode } from 'react'

export type TLanguage = {
  common: {
    meta: {
      title: string
      description: string
    }
    headerMenu: {
      home: string
      about: string
      roadmap: string
      find: string
    }
    footerMenu: {
      home: string
      about: string
      roadmap: string
      find: string
    }
  }
  page: {
    homePage: {
      title: string
      hero: {
        title: string
        description: string
      }
      section: {
        about: {
          title: string
          description: ReactNode
          buttonLabel: string
        }
        campaign: {
          title: string
          subTitle: string
          currentPeople: string
          currentOwner: ReactNode
          description: string
          buttonLabel: string
        }
      }
    }
    aboutPage: {
      title: string
      hero: {
        title: string
        description: string
      }
      section: {
        neo: {
          name: string
          description: ReactNode
        }
        moo: {
          name: string
          description: ReactNode
        }
        smith: {
          name: string
          description: ReactNode
        }
        oracle: {
          name: string
          description: ReactNode
        }
      }
    }
    roadmapPage: {
      title: string
      hero: {
        title: string
        description: string
      }
      section: {
        q1: {
          title: string
          objectives: Array<string>
        }
        q2: {
          title: string
          objectives: Array<string>
        }
        q3: {
          title: string
          objectives: Array<string>
        }
        q4: {
          title: string
          objectives: Array<string>
        }
      }
    }
    findPage: {
      title: string
      hero: {
        title: string
        description: string
      }
      section: {
        title: string
        content: {
          step1: {
            title: string
            description: React.ReactNode
          }
          step2: {
            title: string
            description: React.ReactNode
            buttonLabel: string
          }
          campaign: {
            title: React.ReactNode
            description: React.ReactNode
            currentPeople: string
            currentOwner: ReactNode
            requirement: {
              title: string
              list: Array<string>
            }
          }
        }
      }
    }
    campaignPage: {
      title: string
      hero: {
        title: string
      }
      section: {
        content: {
          bearName: string
          description: React.ReactNode
          term: {
            title: string
            description: string
          }
          requirement: {
            title: string
            lists: Array<string>
          }
        }
        twitter: {
          title: string
          description: React.ReactNode
        }
        form: {
          title: string
          description: React.ReactNode
          secretWord: React.ReactNode
          url: string
        }
        openSea: {
          title: string
          description: React.ReactNode
        }
      }
    }
  }
}
