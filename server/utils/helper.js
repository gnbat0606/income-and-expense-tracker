import { dbPath } from "./constants.js";
import { readFileSync } from "fs";

export const getDatabase = async () => {
  const resultJson = await readFileSync(dbPath, "utf-8");
  const database = JSON.parse(resultJson);

  return database;
};
