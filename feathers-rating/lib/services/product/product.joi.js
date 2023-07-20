"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.productValidation = exports.getProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const name = joi_1.default.string().required();
const description = joi_1.default.string().required();
const rating = joi_1.default.number().required();
const search = joi_1.default.string().trim().allow('').default('').label('Search text');
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.createProductSchema = joi_1.default.object().keys({
    name,
    description,
    rating
});
exports.getProductSchema = joi_1.default.object().keys({
    search,
    limit,
    skip
});
exports.productValidation = feathers_validate_joi_1.default.form(exports.createProductSchema);
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
//# sourceMappingURL=product.joi.js.map