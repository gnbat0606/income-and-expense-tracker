import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sql } from "../database/index.js";
dotenv.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const existEmail = await sql`SELECT * FROM users WHERE email = ${email}`;
  console.log(existEmail);

  if (existEmail.length === 0) {
    res.status(400).send("Email or password incorrect");
    return;
  }

  const userId = existEmail[0].userid;
  const hashedPassword = existEmail[0].password;

  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

  if (!isPasswordMatch) {
    res.status(400).send("Email or password incorrect");
    return;
  }

  const token = jwt.sign({ userId: userId }, process.env.SECRET, {
    expiresIn: "1d",
  });

  res.status(200).send({ message: "Successfully logged in", token });
};
