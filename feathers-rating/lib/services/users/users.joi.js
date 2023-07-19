"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.userValidation = exports.getUserSchema = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,10})';
const message = {
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
};
const email = joi_1.default.string().required();
const password = joi_1.default.string().pattern(new RegExp(pattern)).required().messages(message);
const role = joi_1.default.string().valid('admin', 'customer').required();
const search = joi_1.default.string().trim().allow('').default('').label('Search text');
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.userSchema = joi_1.default.object().keys({
    email,
    password,
    role
});
exports.getUserSchema = joi_1.default.object().keys({
    search,
    limit,
    skip
});
exports.userValidation = feathers_validate_joi_1.default.form(exports.userSchema);
exports.joiOptions = {
    errors: {
        wrap: {
            label: ''
        }
    },
    convert: true,
    abortEarly: false
};
exports.joiReadOptions = {
    getContext(context) {
        return context.params.query;
    },
    setContext(context, newValues) {
        Object.assign(context.params.query, newValues);
    },
    convert: true,
    abortEarly: false
};
//# sourceMappingURL=users.joi.js.map