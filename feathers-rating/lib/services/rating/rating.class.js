"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.RatingService = void 0;
const knex_1 = require("@feathersjs/knex");
const domain_1 = require("domain");
class RatingService extends knex_1.KnexService {
    async create(data, params) {
        const { productId } = data;
        // Check if the user has already rated the product
        const existingRating = await this._find({
            query: {
                productId,
            }
        });
        if (existingRating.total > 0) {
            throw new Error('You have already rated this product.');
        }
        return super.create({ ...data }, params);
    }
}
exports.RatingService = RatingService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'rating'
    };
};
exports.getOptions = getOptions;
exports.default = domain_1.create; // Default export the RatingService class
//# sourceMappingURL=rating.class.js.map