import { Model } from 'sequelize';
declare class User extends Model {
    id: number;
    email: string;
    password: string;
    role: string;
}
export { User };
