import { createLogger, format, transports } from "winston";

function devLogger() {
  const { simple, printf, combine, colorize, label, timestamp } = format;

  const newFromat = printf(({ level, message, label, timestamp, stack }) => {
    return `${timestamp} [${label}] ${level}: ${stack || message}`;
  });

  return createLogger({
    format: combine(
      label({ label: "dev" }),
      colorize({
        colors: {
          info: "green",
          warn: "yellow",
          error: "red",
          debug: "blue",
        },
      }),
      timestamp({ format: "HH:mm:ss" }),
      newFromat
    ),
    // defaultMeta: { service: "user-service" },
    transports: [
      new transports.Console({ level: "error" }),
      new transports.Console({ level: "debug" }),
      new transports.Console({ level: "info" }),
      new transports.Console({ level: "warn" }),
    ],
  });
}

export default devLogger;
