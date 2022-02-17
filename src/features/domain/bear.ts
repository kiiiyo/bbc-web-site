import { Entry as ContentfulEntry, EntryCollection as ContentfulEntryCollection } from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { IBitBearFields } from '@/types/contentful'
//
import { TLocale } from '@/types/locale'
export const ContentType = 'bitBear'

export type Fields = IBitBearFields
export type Entry = ContentfulEntry<Fields>
export type EntryCollection = ContentfulEntryCollection<Fields>

export type CollectionQuery = {
  locale: TLocale
}

export type Image = {
  title: string
  url: string
}

export type Entity = {
  name: string
  slug: string
  description?: Document | null
  keyVisualImage: Image
}

export type Collection = {
  total: number
  items: Array<Entity>
}

// Mapper

export const bearsMapping = (bears: EntryCollection): Collection => {
  return {
    total: bears.total,
    items: bears.items.map((bear) => bearMapping(bear))
  }
}

export const bearMapping = (bear: Entry): Entity => {
  const {
    fields: { name, slug, description, keyVisualImage }
  } = bear

  return {
    name: name || '',
    slug: slug || '',
    description: description || null,
    keyVisualImage: {
      title: keyVisualImage.fields.title,
      url: `https:${keyVisualImage.fields.file.url}`
    }

    // image: image
    //   ? {
    //       title: image?.fields.title,
    //       url: image?.fields.file.url
    //     }
    //   : null
  }
}
