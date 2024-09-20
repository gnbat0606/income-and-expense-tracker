import fs from "fs";
import { dbPath } from "../utils/constants.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const tokensecret = "iodgkhjlkhkhjkjjkhkhj";

  const { email, password } = req.body;

  const doesExist = result.users.find((el) => el.email == email);

  if (!doesExist) {
    res.status(400).send("email or password incorrect");
    return;
  }
  const passwordMatch = await bcrypt.compare(password, doesExist.hashPassword);

  if (!passwordMatch) {
    res.status(400).send("email or password incorrect");
    return;
  }

  const token = jwt.sign({ email }, tokensecret, {
    expiresIn: "5m",
  });

  res.status(200).send({ token });
};
