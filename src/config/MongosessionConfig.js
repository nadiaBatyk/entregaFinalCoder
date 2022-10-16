import MongoStore from "connect-mongo";
import config from "./config.js";
const sessionConfig = {
  store: MongoStore.create({
    mongoUrl: config.MONGODB.URL,
    mongoOptions: config.MONGODB.options,
  }),
  cookie: { maxAge: 10000 * 60 },
  secret: "pass",
  resave: false,
  saveUninitialized: false,
};
export default sessionConfig;
