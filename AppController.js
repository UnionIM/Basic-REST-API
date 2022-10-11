import AppService from "./AppService.js";

class AppController {
  async createUser(req, res) {
    try {
      const { name } = req.body;
      const user = await AppService.createUser(name);
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await AppService.createCategory(name);
      res.json(category);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createRecord(req, res) {
    try {
      const { userId, categoryId, sum } = req.body;
      const record = await AppService.createRecord(userId, categoryId, sum);
      res.json(record);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getCategory(req, res) {
    try {
      const category = await AppService.getCategory();
      res.json(category);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getRecordByUserId(req, res) {
    try {
      const userId = req.params.userId;
      const user = await AppService.getRecordByUserId(userId);
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getRecordByUserCategoryId(req, res) {
    try {
      const { userId, categoryId } = req.params;
      const user = await AppService.getRecordByUserCategoryId(
        userId,
        categoryId
      );
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new AppController();
