import DataBase from "../db.js";
import { DataTypes } from "sequelize";
import User from "./User.js";
import Category from "./Category.js";

const Record = DataBase.define("Record", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  date: {
    type: DataTypes.DATE,
  },
  sum: {
    type: DataTypes.INTEGER,
  },
});

export default Record;
