import dotenv from "dotenv";
dotenv.config();
export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  ADMIN_MAIL:process.env.ADMIN_MAIL,
  MONGODB: {
    URL: process.env.MONGO_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};