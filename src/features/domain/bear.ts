import { Entry as ContentfulEntry, EntryCollection as ContentfulEntryCollection } from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { IBitBearFields } from '@/types/contentful'
//
import { TLocale } from '@/types/locale'
export const ContentType = 'bitBear'

export type TFields = IBitBearFields
export type TEntry = ContentfulEntry<TFields>
export type TEntryCollection = ContentfulEntryCollection<TFields>

export type TBearNameSlug = 'neo' | 'moo' | 'smith' | 'oracle' | 'trinity' | 'dujour' | 'link' | 'thomas' | 'bearly'

export type TCollectionQuery = {
  locale: TLocale
}

export type TSingleQuery = {
  locale: TLocale
  slug: TBearNameSlug
}

export type TImage = {
  title: string
  url: string
}

export type TEntity = {
  name: string
  slug: string
  nickname: string
  shareText: string
  description: Document
  keyVisualImage: TImage
  ogpImage: TImage | null
  metadata?: Record<string, any> | null
}

export type TCollection = {
  total: number
  items: Array<TEntity>
}

// Mapper

export const bearsMapping = (bears: TEntryCollection): TCollection => {
  return {
    total: bears.total,
    items: bears.items.map((bear) => bearMapping(bear))
  }
}

export const bearMapping = (bear: TEntry): TEntity => {
  const {
    fields: { name, slug, description, keyVisualImage, nickname, shareText, ogpImage, metadata }
  } = bear

  return {
    name: name || '',
    slug: slug || '',
    nickname: nickname || '',
    shareText: shareText || '',
    description: description,
    keyVisualImage: {
      title: keyVisualImage.fields.title,
      url: `https:${keyVisualImage.fields.file.url}`
    },
    ogpImage: ogpImage
      ? {
          title: ogpImage?.fields.title,
          url: `https:${ogpImage.fields.file.url}`
        }
      : null,
    metadata: metadata || null
  }
}
