"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ProductService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ProductService extends knex_1.KnexService {
}
exports.ProductService = ProductService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'product'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=product.class.js.map