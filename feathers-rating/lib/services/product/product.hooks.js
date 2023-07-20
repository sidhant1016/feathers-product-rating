"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const schema_1 = require("@feathersjs/schema");
const checkAdmin_hook_1 = require("../../hooks/checkAdmin.hook");
const product_schema_1 = require("./product.schema");
const product_joi_1 = require("./product.joi");
exports.default = {
    around: {
        all: [
            (0, authentication_1.authenticate)('jwt'),
            schema_1.hooks.resolveExternal(product_schema_1.productExternalResolver),
            schema_1.hooks.resolveResult(product_schema_1.productResolver)
        ]
    },
    before: {
        all: [(0, authentication_1.authenticate)('jwt')],
        find: [feathers_validate_joi_1.default.form(product_joi_1.getProductSchema, product_joi_1.joiReadOptions)],
        get: [feathers_validate_joi_1.default.form(product_joi_1.getProductSchema, product_joi_1.joiReadOptions)],
        create: [
            checkAdmin_hook_1.authorizeAdminOnly,
            feathers_validate_joi_1.default.form(product_joi_1.createProductSchema, product_joi_1.joiOptions),
            schema_1.hooks.resolveData(product_schema_1.productDataResolver)
        ],
        patch: [
            checkAdmin_hook_1.authorizeAdminOnly,
            feathers_validate_joi_1.default.form(product_joi_1.createProductSchema, product_joi_1.joiOptions),
            schema_1.hooks.resolveData(product_schema_1.productPatchResolver)
        ],
        remove: [checkAdmin_hook_1.authorizeAdminOnly]
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=product.hooks.js.map