import DataBase from "../db.js";
import { DataTypes } from "sequelize";

const Category = DataBase.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Category;
