import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken) {
      next();
    }
  } catch {
    res.status(401).json("Invalid token!");
  }
};
