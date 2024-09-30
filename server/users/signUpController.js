import bcryptjs from "bcryptjs";
import { writeFileSync } from "fs";
import { randomUUID } from "crypto";
import { dbPath } from "../utils/constants.js";
import { getDatabase } from "../utils/helper.js";

export const signUpController = async (req, res) => {
  const { username, email, password, rePassword } = req.body;

  const database = await getDatabase();
  const userDatabase = database.users;

  const doesExist = userDatabase.find((el) => el.email == email);

  if (doesExist) {
    res.status(400).send("email burttgeltei baina");
    return;
  }

  if (password !== rePassword) {
    res.send("password zuruud baina").status(400);
  }

  const userId = randomUUID();
  const hashPassword = bcryptjs.hashSync(password, 10);
  const createdAt = new Date();
  const UpdatedAt = new Date();

  database.users.push({
    email,
    username,
    userId,
    password: hashPassword,
    createdAt,
    UpdatedAt,
  });

  await writeFileSync(dbPath, JSON.stringify(database), "utf-8");

  res.send(database);
  res.status(200).send("sign-up success");
};
