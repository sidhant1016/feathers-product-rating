"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.ratingValidation = exports.getratingSchema = exports.ratingSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const productId = joi_1.default.number().integer().required();
const rating = joi_1.default.number().min(0).max(5).required();
const search = joi_1.default.string().trim().allow('').default('').label('Search text');
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.ratingSchema = joi_1.default.object().keys({
    productId,
    rating
});
exports.getratingSchema = joi_1.default.object().keys({
    search,
    limit,
    skip
});
exports.ratingValidation = feathers_validate_joi_1.default.form(exports.ratingSchema);
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
//# sourceMappingURL=rating.joi.js.map