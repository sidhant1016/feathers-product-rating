"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env' });
const sequelize = new sequelize_1.Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`, { dialect: 'postgres', logging: false });
// Sync the models with the database
sequelize
    .sync({ force: false })
    .then(() => {
    console.log('All models were synchronized successfully.');
})
    .catch((err) => {
    console.error('Unable to synchronize the models:', err);
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connected to the database.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map