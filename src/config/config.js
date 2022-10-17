import dotenv from "dotenv";
dotenv.config();
export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_NAME:process.env.DB_NAME,
  ADMIN_MAIL:process.env.ADMIN_MAIL,
  ADMIN_TEL:process.env.ADMIN_TEL,
  TOKEN_KEY:process.env.TOKEN_KEY,
  MONGODB: {
    URL: process.env.NODE_ENV=='dev'? process.env.MONGO_URL_DEV:process.env.MONGO_URL_PROD,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
