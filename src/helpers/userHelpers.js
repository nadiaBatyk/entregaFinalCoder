import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
async function encrypt(password) {
  const pass = await bcrypt.hash(password, 10);
  return pass
}

function signToken(user) {
  return jwt.sign({ userId: user._id, email: user.email }, config.TOKEN_KEY, {
    expiresIn: "1h",
  });
}
export { encrypt,signToken };
