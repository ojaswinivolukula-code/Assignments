import fs from "fs";
import path from "path";

const readFileData = () => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(process.cwd(), "Data.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

export default readFileData;
