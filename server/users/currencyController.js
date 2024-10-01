import dotenv from "dotenv";
import { dbPath } from "../utils/constants.js";
import { getDatabase } from "../utils/helper.js";
import fs from "fs";
dotenv.config();

export const currencyController = async (req, res) => {
  // console.log(res);
  const email = res.locals.email;
  const { currency } = req.body;

  // const database = await getDatabase();

  // const updatedUsers = database.users.map((el) => {
  //   if (el.email === email) {
  //     return { ...el, currency: el.currency };
  //   } else {
  //     return { ...el };
  //   }
  // });

  // database.users = updatedUsers;
  // await fs.writeFileSync(dbPath, JSON.stringify(database));

  res.status(200).send({ message: "succesfully Updated" });
};
