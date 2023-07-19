"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingQueryResolver = exports.ratingQueryValidator = exports.ratingQuerySchema = exports.ratingPatchResolver = exports.ratingPatchValidator = exports.ratingPatchSchema = exports.ratingDataResolver = exports.ratingDataValidator = exports.ratingDataSchema = exports.ratingExternalResolver = exports.ratingResolver = exports.ratingValidator = exports.ratingSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const validators_1 = require("../../validators");
const rating_joi_1 = require("./rating.joi");
// Main data model schema
exports.ratingSchema = {
    $id: 'Rating',
    type: 'object',
    additionalProperties: false,
    required: ['id', 'userId', 'productId'],
    properties: {
        id: { type: 'number' },
        userId: { type: 'number' },
        productId: { type: 'number' }
    }
};
exports.ratingValidator = rating_joi_1.ratingValidation;
exports.ratingResolver = (0, schema_1.resolve)({});
exports.ratingExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new data
exports.ratingDataSchema = {
    $id: 'RatingData',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.ratingSchema.properties
    }
};
exports.ratingDataValidator = rating_joi_1.ratingValidation;
exports.ratingDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing data
exports.ratingPatchSchema = {
    $id: 'RatingPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...exports.ratingSchema.properties
    }
};
exports.ratingPatchValidator = (0, schema_1.getValidator)(exports.ratingPatchSchema, validators_1.dataValidator);
exports.ratingPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.ratingQuerySchema = {
    $id: 'RatingQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
        ...(0, schema_1.querySyntax)(exports.ratingSchema.properties)
    }
};
exports.ratingQueryValidator = (0, schema_1.getValidator)(exports.ratingQuerySchema, validators_1.queryValidator);
exports.ratingQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=rating.schema.js.map