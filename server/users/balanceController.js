import { sql } from "../database/index.js";

export const balanceController = async (req, res) => {
  const { userId } = res.locals;
  const { balance } = req.body;

  await sql`UPDATE users SET balance = ${balance} WHERE userid = ${userId}`;

  // const database = await getDatabase();

  // const updatedUsers = database.users.map((el) => {
  //   if (el.email === email) {
  //     return { ...el, balance: el.balance };
  //   } else {
  //     return { ...el };
  //   }
  // });

  // database.users = updatedUsers;

  // await fs.writeFileSync(dbPath, JSON.stringify(database));

  res.status(200).send({ message: "Succesfully Updated" });
};
