"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const schema_1 = require("@feathersjs/schema");
const category_schema_1 = require("./category.schema");
const category_joi_1 = require("./category.joi");
exports.default = {
    around: {
        all: [
            (0, authentication_1.authenticate)('jwt'),
            schema_1.hooks.resolveExternal(category_schema_1.categoryExternalResolver),
            schema_1.hooks.resolveResult(category_schema_1.categoryResolver)
        ]
    },
    before: {
        all: [(0, authentication_1.authenticate)('jwt')],
        find: [feathers_validate_joi_1.default.form(category_joi_1.getcategorySchema, category_joi_1.joiReadOptions)],
        get: [feathers_validate_joi_1.default.form(category_joi_1.getcategorySchema, category_joi_1.joiReadOptions)],
        create: [feathers_validate_joi_1.default.form(category_joi_1.categorySchema, category_joi_1.joiOptions), schema_1.hooks.resolveData(category_schema_1.categoryDataResolver)],
        patch: [feathers_validate_joi_1.default.form(category_joi_1.categorySchema, category_joi_1.joiOptions), schema_1.hooks.resolveData(category_schema_1.categoryPatchResolver)],
        remove: []
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=category.hooks.js.map