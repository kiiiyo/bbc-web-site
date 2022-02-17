import { Domain, Repository } from '../index'

export const bearCollection: (query: Domain.Bear.CollectionQuery) => Promise<Domain.Bear.Collection> = async (
  query
) => {
  return await Repository.Bear.bearCollection(query)
}
