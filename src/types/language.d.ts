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
  }
}
