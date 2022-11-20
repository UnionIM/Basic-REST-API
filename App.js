import express from "express";
import router from "./Router.js";
import DataBase from "./db/db.js";

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use("/rest-api", router);

app.listen(PORT, async () => {
  try {
    await DataBase.authenticate();
    await DataBase.sync();
    console.log("Auth is success");
  } catch (err) {
    console.error("ERROR: ", err);
  }
  console.log("SERVER STARTED ON PORT " + PORT);
});
