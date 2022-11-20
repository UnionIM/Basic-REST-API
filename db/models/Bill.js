import DataBase from "../db.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const Bill = DataBase.define("Bill", {
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
  amount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Bill;
