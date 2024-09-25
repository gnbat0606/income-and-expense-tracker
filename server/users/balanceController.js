import fs from "fs";
import { dbPath } from "../utils/constants.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const balanceController = async (req, res) => {
  const email = res.locals.email;
  const { balance } = req.body;

  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);
  const doesExist = result.users.find((el) => el.email == email);
  const s = Object.assign(doesExist, { balance });

  res.status(200).send("success");
};
