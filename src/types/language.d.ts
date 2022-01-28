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
      hero: {
        title: string
        description: string
      }
    }
    roadmapPage: {
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
    searchPage: {
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
          }
          campaign: {
            title: React.ReactNode
            description: React.ReactNode
          }
        }
      }
    }
    campaignPage: {
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
