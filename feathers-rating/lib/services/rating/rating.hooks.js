"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const schema_1 = require("@feathersjs/schema");
const rating_class_1 = __importDefault(require("./rating.class"));
const rating_schema_1 = require("./rating.schema");
const rating_joi_1 = require("./rating.joi");
exports.default = {
    around: {
        all: [
            (0, authentication_1.authenticate)('jwt'),
            schema_1.hooks.resolveExternal(rating_schema_1.ratingExternalResolver),
            schema_1.hooks.resolveResult(rating_schema_1.ratingResolver)
        ]
    },
    before: {
        all: [(0, authentication_1.authenticate)('jwt')],
        find: [feathers_validate_joi_1.default.form(rating_joi_1.getratingSchema, rating_joi_1.joiReadOptions)],
        get: [feathers_validate_joi_1.default.form(rating_joi_1.getratingSchema, rating_joi_1.joiReadOptions)],
        create: [
            feathers_validate_joi_1.default.form(rating_joi_1.ratingSchema, rating_joi_1.joiOptions),
            schema_1.hooks.resolveData(rating_schema_1.ratingDataResolver),
            rating_class_1.default
        ],
        patch: [feathers_validate_joi_1.default.form(rating_joi_1.ratingSchema, rating_joi_1.joiOptions), schema_1.hooks.resolveData(rating_schema_1.ratingPatchResolver)],
        remove: []
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=rating.hooks.js.map