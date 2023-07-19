import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { HooksObject } from '@feathersjs/feathers'
import {
  categoryResolver,
  categoryExternalResolver,
  categoryDataResolver,
  categoryPatchResolver
} from './category.schema'
import { categorySchema, getcategorySchema, joiOptions, joiReadOptions } from './category.joi'

export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(categoryExternalResolver),
      schemaHooks.resolveResult(categoryResolver)
    ]
  },
  before: {
    all: [authenticate('jwt')],
    find: [validate.form(getcategorySchema, joiReadOptions)],
    get: [validate.form(getcategorySchema, joiReadOptions)],
    create: [validate.form(categorySchema, joiOptions), schemaHooks.resolveData(categoryDataResolver) as any],
    patch: [validate.form(categorySchema, joiOptions), schemaHooks.resolveData(categoryPatchResolver) as any],
    remove: []
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
