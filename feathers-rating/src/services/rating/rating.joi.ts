import Joi from 'joi'
import validate from 'feathers-validate-joi'
import { HookContext } from '@feathersjs/feathers'

const userId = Joi.number().integer().required()
const productId = Joi.number().integer().required()
const rating = Joi.number().min(0).max(5).required()
const search = Joi.string().trim().allow('').default('').label('Search text')
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const ratingSchema = Joi.object().keys({
userId,
productId,
  rating
})

export const getratingSchema = Joi.object().keys({
  search,
  limit,
  skip
})

export const ratingValidation = validate.form(ratingSchema)

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
