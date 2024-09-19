import fs from "fs";
import { dbPath } from "../utils/constants.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const tokensecret = "iodgkhjlkhkhjkjjkhkhj";

  const { username, password } = req.body;

  const doesExist = result.users.find((el) => el.username == username);

  if (!doesExist) {
    res.send("username or password incorrect").status(400);
    return;
  }
  const passwordMatch = await bcrypt.compare(password, doesExist.hashPassword);

  if (!passwordMatch) {
    res.send("username or password incorrect").status(400);
    return;
  }

  const token = jwt.sign({ username }, tokensecret, {
    expiresIn: "5m",
  });

  res.status(200).send({ token });
};
