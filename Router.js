import { Router } from "express";
import AppController from "./AppController.js";

const router = new Router();

router.post("/user", AppController.createUser);
router.post("/category", AppController.createCategory);
router.post("/record", AppController.createRecord);

export default router;
