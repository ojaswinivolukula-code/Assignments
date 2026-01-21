import fs from "fs";
import path from "path";

const DB_PATH = path.resolve("db.json");

export const readData = () => {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Failed to read database");
  }
};

export const writeData = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    throw new Error("Failed to write database");
  }
};
