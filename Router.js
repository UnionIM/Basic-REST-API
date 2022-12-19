import { Router } from "express";
import AppController from "./AppController.js";
import { authMiddleware } from "./middleware/index.js";

const router = new Router();

router.post("/user", AppController.createUser);
router.post("/bill/:userId", authMiddleware, AppController.addToUserBill);
router.post("/category", authMiddleware, AppController.createCategory);
router.post("/record", authMiddleware, AppController.createRecord);
router.post("/user/login", AppController.loginUser);
router.get("/category", authMiddleware, AppController.getCategory);
router.get("/record/:userId", authMiddleware, AppController.getRecordByUserId);
router.get(
  "/record/:userId/:categoryId",
  AppController.getRecordByUserCategoryId
);

export default router;
