import { Sequelize } from "sequelize";

const DataBase = new Sequelize("sqlite::memory:");

export default DataBase;
