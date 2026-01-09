import os from "os";
import fs from "fs/promises";

//------ PART A ------------
try {
  console.log("Free memory:", os.freemem());
  console.log("Total CPU cores:", os.cpus().length);
} catch (error) {
  console.error("OS module error:", error.message);
}

//-----------PART B-----------------
async function fileOperations() {
  try {
    //1.Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    //2.Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    //3.Read data.txt
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt", data);
    //4.Append new line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    // //5.Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("File operations completed successfully");
  } catch (error) {
    console.error("File system error:", error.message);
  }
}

fileOperations();
