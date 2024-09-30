import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getDatabase } from "../utils/helper.js";
dotenv.config();

export const loginController = async (req, res) => {
  const database = await getDatabase();
  const { email, password } = req.body;
  const doesExist = database.users.find((el) => el.email == email);

  if (!doesExist) {
    res.status(400).send("email or password incorrect");
    return;
  }
  const ispasswordMatch = await bcrypt.compare(password, doesExist.password);

  if (!ispasswordMatch) {
    res.status(400).send("email or password incorrect");
    return;
  }

  const token = jwt.sign({ userId: doesExist.userId }, process.env.SECRET, {
    expiresIn: "1h",
  });

  res.status(200).send({ message: "succesfully logged in", token });
};
