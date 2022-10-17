import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import verifyToken from "../middlewares/auth.js";
import {
  createUserValidator,
  logUserValidator,
} from "../validators/userValidators.js";

const routerUsers = Router();
const userController = new UserController();
routerUsers.route("/").get(userController.loginRender);
routerUsers
  .route("/register")
  .get(userController.registerRender)
  .post(createUserValidator, userController.createUser);
routerUsers
  .route("/login")
  .post(logUserValidator, userController.logUser)
  .get(userController.loginRender);
routerUsers.route("/users").get(verifyToken,userController.getUsers);

export default routerUsers;
