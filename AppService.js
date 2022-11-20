import User from "./db/models/User.js";
import Category from "./db/models/Category.js";
import Record from "./db/models/Record.js";

class AppService {
  async createUser(name) {
    return await User.create({ name });
  }

  async createCategory(name) {
    return await Category.create({ name });
  }

  async createRecord(userId, categoryId, sum) {
    const date = new Date();
    return await Record.create({ userId, categoryId, date, sum });
  }

  async getCategory() {
    return Category.findAll();
  }

  async getRecordByUserId(id) {
    const user = User.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      console.error("No user with this ID");
    }

    return await Record.findAll({ where: { userId: id } });
  }

  async getRecordByUserCategoryId(userId, categoryId) {
    return Record.findAll({ where: { userId, categoryId } });
  }
}

export default new AppService();
