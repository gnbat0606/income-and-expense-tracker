import bcryptjs from "bcryptjs";
import { writeFileSync } from "fs";
import { hash, randomUUID } from "crypto";
import { dbPath } from "../utils/constants.js";
import { getDatabase } from "../utils/helper.js";
import { sql } from "../database/index.js";

export const signUpController = async (req, res) => {
  const { username, email, password, rePassword } = req.body;

  // const database = await getDatabase();
  // const userDatabase = database.users;

  // const doesExist = userDatabase.find((el) => el.email == email);

  const existEmail = await sql`SELECT * FROM users WHERE email = ${email}`;

  if (existEmail.length > 0) {
    res.status(400).send("email burttgeltei baina");
    return;
  }

  if (password !== rePassword) {
    res.send("password zuruud baina").status(400);
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const userId = randomUUID();
  const createdAt = new Date();

  const database =
    await sql`INSERT INTO users(userId, username, email, password, createdAt)
  VALUES(${userId}, ${username}, ${email}, ${hashedPassword}, ${createdAt})`;

  // res.send(database);
  res.status(200).send("sign-up success");
};
