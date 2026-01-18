import { error } from "node:console";

let count = 0;
let startTime = Date.now();
export const rateLimiter = (req, res, next) => {
    const now=Date.now();
  if (now - startTime > 60000) {
    count = 0;
    startTime = now;
  }
  count++;
  if (count > 15) {
    return res
      .status(429)
      .json({ error: "Too many requests, please try again later" });
  }
  next();
};
