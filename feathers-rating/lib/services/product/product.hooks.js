"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@feathersjs/authentication");
const feathers_validate_joi_1 = __importDefault(require("feathers-validate-joi"));
const schema_1 = require("@feathersjs/schema");
const product_schema_1 = require("./product.schema");
const product_joi_1 = require("./product.joi");
const authorizeAdminOnly = (context) => {
    const { user } = context.params;
    if (!user || user.role !== 'admin') {
        throw new Error('Only admin users are authorized to create and manage products.');
    }
};
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
            authorizeAdminOnly,
            feathers_validate_joi_1.default.form(product_joi_1.createProductSchema, product_joi_1.joiOptions),
            schema_1.hooks.resolveData(product_schema_1.productDataResolver)
        ],
        patch: [
            authorizeAdminOnly,
            feathers_validate_joi_1.default.form(product_joi_1.createProductSchema, product_joi_1.joiOptions),
            schema_1.hooks.resolveData(product_schema_1.productPatchResolver)
        ],
        remove: [authorizeAdminOnly]
    },
    after: {
        all: []
    },
    error: {
        all: []
    }
};
//# sourceMappingURL=product.hooks.js.map