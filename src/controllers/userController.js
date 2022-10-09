import { UserService } from "../services/userService.js";

export class UserController {
  constructor() {
    this.userService = new UserService();
  }
  getUsers = async (req, res, next) => {
    try {
      let users = await this.userService.getUsers();
      return res.json(users);
    } catch (error) {
      return next(error);
    }
  };
  getUser = async (req, res, next) => {
    try {
      let { id } = req.params;
      let user = await this.userService.getUser(id);
      return res.json(user);
    } catch (error) {
      return next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      let user = req.body;
      let newUser = await this.userService.createUser(user);
      return res.json(newUser);
    } catch (error) {
      return next(error);
    }
  };
  logUser = async (req, res, next) => {
    try {
      let {email,password} = req.body;
      let loggedUser = await this.userService.logUser(email,password);
      return res.json(loggedUser);
    } catch (error) {
      return next(error);
    }
  };
  deleteUser = async (req, res, next) => {
    try {
      let { id } = req.params;
      let message = await this.userService.deleteUser(id);
      return res.json(message);
    } catch (error) {
      return next(error);
    }
  };
  updateUser = async (req, res, next) => {
    try {
      let user = req.body;
      let { id } = req.params;
      let newUser = await this.userService.updateUser(user, id);
      return res.json(newUser);
    } catch (error) {
      return next(error);
    }
  };
}
