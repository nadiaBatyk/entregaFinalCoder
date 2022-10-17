import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import config from "../config/config.js";
import { ErrorCustom } from "../helpers/errorCustom.js";
dotenv.config();

const { TOKEN_KEY } = config;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"] || req?.session?.user?.token;
  if (!token) {
    const err = new ErrorCustom(
      `Expiró tu sesión, volvé a loguearte`,
      403,
      "Unauthenticated"
    );
    throw err;
  }

  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    const err = new ErrorCustom(
        `Invalid Token`,
        401,
        "Invalid Token"
      );
      throw err;
   
  }
  return next();
};
export default verifyToken;
