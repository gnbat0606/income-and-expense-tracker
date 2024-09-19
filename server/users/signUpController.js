import bcryptjs from "bcryptjs";
import fs from "fs";
import { randomUUID } from "crypto";
import { dbPath } from "../utils/constants.js";

export const signUpController = async (req, res) => {
  const resultJson = await fs.readFileSync(dbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const userId = randomUUID();

  const { username, password, rePassword } = req.body;

  const doesExist = result.users.find((el) => el.username == username);

  if (doesExist) {
    res.status(400).send("username burttgeltei baina");
    return;
  }

  if (password !== rePassword) {
    res.send("password zuruud baina").status(400);
  }
  const hashPassword = bcryptjs.hashSync(password, 10);

  result.users.push({
    username,
    password,
    hashPassword,
  });

  await fs.writeFileSync(dbPath, JSON.stringify(result), "utf-8");
  res.send(result);

  res.status(200).send("sign-up success");
};
