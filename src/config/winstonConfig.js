import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "informes/warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "informes/error.log",
      level: "error",
    }),
    new winston.transports.Console({ level: "info" }),
  ],
});

export default logger;
