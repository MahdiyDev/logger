import logger from "./logger/index.js";

logger.error(
  new Error("You have too many bugs in your code, please fix them!")
);

logger.warn("You have too many bugs in your code, please fix them!");

logger.info("You have too many bugs in your code, please fix them!");

logger.debug("You have too many bugs in your code, please fix them!");
