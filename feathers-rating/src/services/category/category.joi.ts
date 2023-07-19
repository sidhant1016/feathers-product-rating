import Joi from 'joi'
import validate from 'feathers-validate-joi'

const name = Joi.string().required()
const search = Joi.string().trim().allow('').default('').label('Search text')
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const categorySchema = Joi.object().keys({
name
})

export const getcategorySchema = Joi.object().keys({
  search,
  limit,
  skip
})

export const ratingValidation = validate.form(categorySchema)

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
