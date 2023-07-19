"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const product_class_1 = require("./product.class");
const product_shared_1 = require("./product.shared");
const product_hooks_1 = __importDefault(require("./product.hooks"));
__exportStar(require("./product.class"), exports);
__exportStar(require("./product.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const product = (app) => {
    // Register our service on the Feathers application
    app.use(product_shared_1.productPath, new product_class_1.ProductService((0, product_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: product_shared_1.productMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(product_shared_1.productPath).hooks(product_hooks_1.default);
};
exports.product = product;
//# sourceMappingURL=product.js.map