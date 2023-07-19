import { authenticate } from '@feathersjs/authentication'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { getUserSchema, joiOptions, joiReadOptions, userSchema } from './users.joi'
import validate from 'feathers-validate-joi'
import  {HooksObject}  from '@feathersjs/feathers'
import { userDataResolver, userResolver, userExternalResolver, userPatchResolver } from './users.schema'

export default {
  around: {
    all: [schemaHooks.resolveExternal(userExternalResolver), schemaHooks.resolveResult(userResolver)],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(userSchema, joiOptions), schemaHooks.resolveData(userDataResolver) as any],
    patch: [validate.form(userSchema, joiOptions), schemaHooks.resolveData(userPatchResolver) as any],
    remove: []
  },
  after: {
    all: []
  },
  error: {
    all: []
  }
} as HooksObject
