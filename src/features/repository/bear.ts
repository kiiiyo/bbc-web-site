import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'
//

export const bearCollection: (query: Domain.Bear.CollectionQuery) => Promise<Domain.Bear.Collection> = async (
  query
) => {
  const { locale } = query

  const data = await contentfulClient.getEntries<Domain.Bear.Fields>({
    content_type: Domain.Bear.ContentType,
    'fields.locale': locale,
    order: 'sys.createdAt'
  })

  return await Domain.Bear.bearsMapping(data)
}
