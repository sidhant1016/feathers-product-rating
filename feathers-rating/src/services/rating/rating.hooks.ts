import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import create from './rating.class'
import { HooksObject } from '@feathersjs/feathers'
import {
  ratingDataValidator,
  ratingPatchValidator,
  ratingQueryValidator,
  ratingResolver,
  ratingExternalResolver,
  ratingDataResolver,
  ratingPatchResolver,
  ratingQueryResolver
} from './rating.schema'
import { getratingSchema, joiOptions, joiReadOptions, ratingSchema } from './rating.joi'


export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(ratingExternalResolver),
      schemaHooks.resolveResult(ratingResolver)
    ]
  },
  before: {
    all: [authenticate('jwt')],
    find: [validate.form(getratingSchema, joiReadOptions)],
    get: [validate.form(getratingSchema, joiReadOptions)],
    create: [
      validate.form(ratingSchema, joiOptions),
      schemaHooks.resolveData(ratingDataResolver) as any,
      create
    ],
    patch: [validate.form(ratingSchema, joiOptions), schemaHooks.resolveData(ratingPatchResolver) as any],
    remove: []
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
