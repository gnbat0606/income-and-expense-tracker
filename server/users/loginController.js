import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sql } from "../database/index.js";
dotenv.config();

export const loginController = async (req, res) => {
  // const database = await getDatabase();
  const { email, password } = req.body;
  // const doesExist = database.users.find((el) => el.email == email);

  const existEmail = await sql`SELECT * FROM users WHERE email = ${email}`;
  const userId = existEmail[0].userid;
  const hashedPassword = existEmail[0].password;

  if ((existEmail.length = 0)) {
    res.status(400).send("email or password incorrect");
    return;
  }

  const ispasswordMatch = await bcrypt.compare(password, hashedPassword);

  if (!ispasswordMatch) {
    res.status(400).send("email or password incorrect");
    return;
  }

  const token = jwt.sign({ userId: userId }, process.env.SECRET, {
    expiresIn: "1h",
  });

  res.status(200).send({ message: "succesfully logged in", token });
};
