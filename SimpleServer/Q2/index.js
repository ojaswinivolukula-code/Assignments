import express from "express";
import readFileData from "./read.js";
import os, { hostname, platform, totalmem } from "os";
import dns from "dns";

const app = express();

app.get("/test", (req, res) => {
  res.json({ message: "Test route is working!" });
});

app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (err) {
    res.status(500).send("Error reading file");
  }
});

app.get("/systemdetails", (req, res) => {
  res.json({
    platform: os.platform(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length,
  });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses,
      });
    }
  });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
