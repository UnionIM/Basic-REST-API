import User from "./db/models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Category from "./db/models/Category.js";
import Record from "./db/models/Record.js";
import Bill from "./db/models/Bill.js";
import * as dotenv from "dotenv";
dotenv.config();

class AppService {
  async createUser(name, password) {
    const encPassword = await bcrypt.hash(password, 6);
    const user = await User.create({ name, password: encPassword });
    const dbo = user.get();
    dbo.token = jwt.sign({ id: user.id, name }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });
    await Bill.create({ userId: user.id });
    return dbo;
  }

  async addToUserBill(userId, amount) {
    const bill = await Bill.findOne({ where: { userId } });
    await Bill.update(
      { amount: +bill.amount + +amount },
      { where: { userId } }
    );
    return await Bill.findOne({ where: { userId } });
  }

  async createCategory(name) {
    return await Category.create({ name });
  }

  async createRecord(userId, categoryId, sum) {
    const date = new Date();
    const bill = await Bill.findOne({ where: { userId } });
    if (+sum > +bill.amount) {
      throw new Error("Not enough money in user bill");
    }
    await Bill.update({ amount: +bill.amount - +sum }, { where: { userId } });
    return await Record.create({ userId, categoryId, date, sum });
  }

  async loginUser(name, password) {
    const check = await User.findOne({ where: { name } });
    if (!check) {
      throw new Error("This username doesn't exist");
    }
    const user = await User.findOne({ where: { name } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const dbo = user.get();
      dbo.token = jwt.sign({ id: user.id, name }, process.env.JWT_SECRET_KEY, {
        expiresIn: "2h",
      });
      return dbo;
    }
    return "Invalid password";
  }

  async getCategory() {
    return Category.findAll();
  }

  async getRecordByUserId(id) {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("No user with that id");
    }
    return await Record.findAll({ where: { userId: id } });
  }

  async getRecordByUserCategoryId(userId, categoryId) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    const category = await Category.findOne({
      where: {
        id: categoryId,
      },
    });
    if (!user || !category) {
      throw new Error("No user or category with that id");
    }
    return Record.findAll({ where: { userId, categoryId } });
  }
}

export default new AppService();
