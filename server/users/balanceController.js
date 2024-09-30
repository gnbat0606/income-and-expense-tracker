import dotenv from "dotenv";
import { getDatabase } from "../utils/helper.js";
import { dbPath } from "../utils/constants.js";
import fs from "fs";
dotenv.config();

export const balanceController = async (req, res) => {
  const email = res.locals.email;
  const { balance } = req.body;

  const database = await getDatabase();

  const updatedUsers = database.users.map((el) => {
    if (el.email === email) {
      return { ...el, balance: el.balance };
    } else {
      return { ...el };
    }
  });

  database.users = updatedUsers;

  await fs.writeFileSync(dbPath, JSON.stringify(database));

  res.status(200).send({ message: "Succesfully Updated" });
};
