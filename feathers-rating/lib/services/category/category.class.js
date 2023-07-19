"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.CategoryService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class CategoryService extends knex_1.KnexService {
}
exports.CategoryService = CategoryService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'category'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=category.class.js.map