import express from "express";
import router from "./Router.js";

const PORT = 5001;

const app = express();
app.use(express.json());
app.use("/rest-api", router);

function startApp() {
  try {
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

startApp();
