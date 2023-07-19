import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'

const name = Joi.string().required()
const description = Joi.string().required()
const category = Joi.string().required()
const  rating = Joi.number().required()
const search = Joi.string().trim().allow('').default('').label('Search text')
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const createProductSchema = Joi.object().keys({
 name,
 description,
 category,
 rating
})

export const getProductSchema = Joi.object().keys({
  search,
  limit,
  skip
})

export const productValidation = validate.form(createProductSchema)

export const joiOptions = {
  errors: {
    wrap: {
      label: ''
    }
  },
  convert: true,
  abortEarly: false
}

export const joiReadOptions = {
  getContext(context: { params: { query: any } }) {
    return context.params.query
  },
  setContext(context: { params: { query: any } }, newValues: any) {
    Object.assign(context.params.query, newValues)
  },

  convert: true,
  abortEarly: false
}
