import { Model } from 'sequelize';
declare class Rating extends Model {
    id: number;
    productId: number;
    rating: number;
}
export default Rating;
