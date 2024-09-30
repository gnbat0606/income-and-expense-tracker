import { sql } from "../database/index.js";
import { v4 as uuid } from "uuid";

export const testController = async (req, res) => {
  // const { username, email, password } = req.body;
  // const createdAt = new Date();
  // const userId = uuid();
  // await sql`INSERT INTO users(userId, username, email, password, createdAt)
  //   VALUES(${userId}, ${username}, ${email}, ${password}, ${createdAt})`;

  //   const result = await sql`SELECT * FROM users`;
  //   const result = await sql`SELECT * FROM users WHERE username = 'a'`;

  //   const result =
  //     await sql`UPDATE users SET password = ''  WHERE username = 'b'`;

  //   const result = await sql`SELECT  * FROM users ORDER BY email DESC`;

  //   const result = await sql`SELECT TOP 3 * FROM users`;
  console.log(result);

  res.send("success");
};
