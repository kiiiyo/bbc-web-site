import { Domain, Repository } from '../index'

export const bearCollection: (query: Domain.Bear.TCollectionQuery) => Promise<Domain.Bear.TCollection> = async (
  query
) => {
  return await Repository.Bear.bearCollection(query)
}

export const bearSingle: (query: Domain.Bear.TSingleQuery) => Promise<Domain.Bear.TEntity> = async (query) => {
  return await Repository.Bear.bearSingle(query)
}
