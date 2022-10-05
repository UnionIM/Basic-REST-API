import express from "express";

const PORT = 5001;

const app = express();
app.use(express.json());

function startApp() {
  try {
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (err) {
    console.log("ERROR: ", err);
  }
}

startApp();
