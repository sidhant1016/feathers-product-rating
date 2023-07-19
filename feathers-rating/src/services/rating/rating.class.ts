import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import { create } from 'domain'

import type { Application } from '../../declarations'
import type { Rating, RatingData, RatingPatch, RatingQuery } from './rating.schema'

export type { Rating, RatingData, RatingPatch, RatingQuery }


export interface RatingParams extends KnexAdapterParams<RatingQuery> {}

export class RatingService<ServiceParams extends Params = RatingParams> extends KnexService<
  Rating,
  RatingData,
  RatingParams,
  RatingPatch
> {
  async create(data: RatingData, params: ServiceParams): Promise<Rating> {
    const { productId } = data
    const userId = params?.user?.id

    if (!userId) {
      throw new Error('You must be logged in to submit a rating.')
    }

    // Check if the user has already rated the product
    const existingRating = await this._find({
      query: {
        productId,
        userId
      }
    })

    if (existingRating.total > 0) {
      throw new Error('You have already rated this product.')
    }

    return super.create({ ...data, userId }, params)
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'rating'
  }
}

export default create // Default export the RatingService class
