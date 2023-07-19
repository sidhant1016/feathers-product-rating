import { Model } from 'sequelize';
declare class Rating extends Model {
    id: number;
    userId: number;
    productId: number;
    rating: number;
}
export default Rating;
