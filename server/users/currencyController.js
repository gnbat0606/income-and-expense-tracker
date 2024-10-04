import { sql } from "../database/index.js";

export const currencyController = async (req, res) => {
  const { userId } = res.locals;
  const { currency } = req.body;

  await sql`UPDATE users SET currency = ${currency} WHERE userid = ${userId}`;

  res.status(200).send({ message: "succesfully Updated" });
};
