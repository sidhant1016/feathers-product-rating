import { Model } from 'sequelize';
declare class Product extends Model {
    id: number;
    name: string;
    description: string;
    rating: number;
}
export default Product;
