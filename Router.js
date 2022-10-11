import { Router } from "express";
import AppController from "./AppController.js";

const router = new Router();

router.post("/user", AppController.createUser);
router.post("/category", AppController.createCategory);
router.post("/record", AppController.createRecord);
router.get("/category", AppController.getCategory);
router.get("/record/:userId", AppController.getRecordByUserId);
router.get(
  "/record/:userId/:categoryId",
  AppController.getRecordByUserCategoryId
);

export default router;
