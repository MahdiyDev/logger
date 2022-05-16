import devLogger from "./dev.js";
import prodLogger from "./prod.js";
import { config } from "dotenv";

config();

let logger = null;

if (process.env.LOG === "dev") {
  logger = devLogger();
} else if (process.env.LOG === "prod") {
  logger = prodLogger();
}

export default logger;
