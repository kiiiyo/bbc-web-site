import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'
//

export const bearCollection: (query: Domain.Bear.TCollectionQuery) => Promise<Domain.Bear.TCollection> = async (
  query
) => {
  const { locale } = query

  const data = await contentfulClient.getEntries<Domain.Bear.TFields>({
    content_type: Domain.Bear.ContentType,
    'fields.locale': locale,
    order: '-fields.sortOrder'
  })

  return await Domain.Bear.bearsMapping(data)
}

export const bearSingle: (query: Domain.Bear.TSingleQuery) => Promise<Domain.Bear.TEntity> = async (query) => {
  const { locale, slug } = query

  const data = await contentfulClient.getEntries<Domain.Bear.TFields>({
    content_type: Domain.Bear.ContentType,
    'fields.locale': locale,
    'fields.slug': slug,
    order: 'sys.createdAt'
  })

  const bearEntity = await Domain.Bear.bearsMapping(data)

  return bearEntity.items[0]
}
