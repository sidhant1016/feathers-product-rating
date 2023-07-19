"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiReadOptions = exports.joiOptions = exports.ratingValidation = exports.getcategorySchema = exports.categorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const name = joi_1.default.string().required();
const search = joi_1.default.string().trim().allow('').default('').label('Search text');
const limit = joi_1.default.number().label('Limit');
const skip = joi_1.default.number().label('Skip');
exports.categorySchema = joi_1.default.object().keys({
    name
});
exports.getcategorySchema = joi_1.default.object().keys({
    search,
    limit,
    skip
});
exports.ratingValidation = feathers_validate_joi_1.default.form(exports.categorySchema);
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
//# sourceMappingURL=category.joi.js.map