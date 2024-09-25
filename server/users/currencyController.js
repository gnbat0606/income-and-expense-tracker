import fs from "fs";
import { dbPath } from "../utils/constants.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const currencyController = async (req, res) => {
  const email = res.locals.email;
  const { currency } = req.body;

  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const doesExist = result.users.find((el) => el.email == email);
  const a = Object.assign(doesExist, { currency });
  result.users.push(a);
  console.log(result);

  res.status(200).send("Success");
};
