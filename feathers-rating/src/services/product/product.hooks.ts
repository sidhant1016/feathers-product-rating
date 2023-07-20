import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { HooksObject, HookContext } from '@feathersjs/feathers'
import {authorizeAdminOnly} from "../../hooks/checkAdmin.hook"
import {
  productResolver,
  productExternalResolver,
  productDataResolver,
  productPatchResolver
} from './product.schema'

import { createProductSchema, getProductSchema, joiOptions, joiReadOptions } from './product.joi'



export default {
  around: {
    all: [
      authenticate('jwt'),
      schemaHooks.resolveExternal(productExternalResolver),
      schemaHooks.resolveResult(productResolver)
    ]
  },
  before: {
    all: [authenticate('jwt')],
    find: [validate.form(getProductSchema, joiReadOptions)],
    get: [validate.form(getProductSchema, joiReadOptions)],
    create: [
      authorizeAdminOnly, 
      validate.form(createProductSchema, joiOptions),
      schemaHooks.resolveData(productDataResolver)
    ],
    patch: [
      authorizeAdminOnly, 
      validate.form(createProductSchema, joiOptions),
      schemaHooks.resolveData(productPatchResolver)
    ],
    remove: [authorizeAdminOnly]
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
