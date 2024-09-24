import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  const jwtToken = token.split(" ")[1];

  jwt.verify(jwtToken, process.env.SECRET, (err, suc) => {
    if (err) {
      res.status(401).send(err);
      return;
    } else {
      res.locals.email = suc.email;
      next();
      return;
    }
  });
};
