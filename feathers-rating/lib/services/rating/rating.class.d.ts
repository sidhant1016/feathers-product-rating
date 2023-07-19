import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import { create } from 'domain';
import type { Application } from '../../declarations';
import type { Rating, RatingData, RatingPatch, RatingQuery } from './rating.schema';
export type { Rating, RatingData, RatingPatch, RatingQuery };
export interface RatingParams extends KnexAdapterParams<RatingQuery> {
}
export declare class RatingService<ServiceParams extends Params = RatingParams> extends KnexService<Rating, RatingData, RatingParams, RatingPatch> {
    create(data: RatingData, params: ServiceParams): Promise<Rating>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
export default create;
