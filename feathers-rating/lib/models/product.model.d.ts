import { Model } from 'sequelize';
declare class Product extends Model {
    id: number;
    name: string;
    description: string;
    category: string;
    rating: number;
}
export default Product;
