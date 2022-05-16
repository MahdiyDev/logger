import { createLogger, format, transports } from "winston";

function prodLogger() {
  const { simple, printf, combine, timestamp, label } = format;

  const newFromat = printf(({ level, message, label, timestamp, stack }) => {
    return `${timestamp} [${label}] ${level}: ${stack || message}\n`;
  });

  return createLogger({
    level: "info",
    format: combine(
      label({ label: "prod" }),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      newFromat
    ),
    // defaultMeta: { service: "user-service" },
    transports: [
      new transports.File({ filename: "./logs/error.log", level: "error" }),
      new transports.File({ filename: "./logs/combined.log" }),
    ],
  });
}

export default prodLogger;
