// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Product, ProductData, ProductPatch, ProductQuery, ProductService } from './product.class'

export type { Product, ProductData, ProductPatch, ProductQuery }

export type ProductClientService = Pick<ProductService<Params<ProductQuery>>, (typeof productMethods)[number]>

export const productPath = 'product'

export const productMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const productClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(productPath, connection.service(productPath), {
    methods: productMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [productPath]: ProductClientService
  }
}
