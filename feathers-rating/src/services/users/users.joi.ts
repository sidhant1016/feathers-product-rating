import Joi from 'joi'
import validate from 'feathers-validate-joi'

const pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,10})'
const message = {
  'string.pattern.base':
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
}
const email = Joi.string().required()
const password = Joi.string().pattern(new RegExp(pattern)).required().messages(message)
const role = Joi.string().valid('admin', 'customer').required()
const search = Joi.string().trim().allow('').default('').label('Search text')
const limit = Joi.number().label('Limit')
const skip = Joi.number().label('Skip')

export const userSchema = Joi.object().keys({
  email,
  password,
  role
})

export const getUserSchema = Joi.object().keys({
  search,
  limit,
  skip
})

export const userValidation = validate.form(userSchema)

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
