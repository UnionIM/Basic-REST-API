import AppService from "./AppService.js";

class AppController {
  async createUser(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400);
        return res.json({
          error: "Enter a user name",
        });
      }
      const user = await AppService.createUser(name);
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async addToUserBill(req, res) {
    try {
      const userId = req.params.userId;
      const { amount } = req.body;
      if (!userId || !amount) {
        res.status(400);
        return res.json({
          error: "Enter a user id and amount",
        });
      }
      const bill = await AppService.addToUserBill(userId, amount);
      res.json(bill);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createCategory(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400);
        return res.json({
          error: "Enter a category name",
        });
      }
      const category = await AppService.createCategory(name);
      res.json(category);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createRecord(req, res) {
    try {
      const { userId, categoryId, sum } = req.body;
      if (!userId || !categoryId || !sum) {
        res.status(400);
        return res.json({
          error: "Incorrect data, enter user id, category id and sum",
        });
      }
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
      if (!userId) {
        res.status(400);
        return res.json({
          error: "Incorrect data, enter user id",
        });
      }
      const user = await AppService.getRecordByUserId(userId);
      res.json(user);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async getRecordByUserCategoryId(req, res) {
    try {
      const { userId, categoryId } = req.params;
      if (!userId || !categoryId) {
        res.status(400);
        return res.json({
          error: "Incorrect data, enter user id and category id",
        });
      }
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
