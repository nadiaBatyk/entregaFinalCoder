import config from "../config/config.js";
import { ErrorCustom } from "../helpers/errorCustom.js";
import UserDaoFactory from "../model/DAOs/user/userDAOFactory.js";

import bcrypt from "bcrypt";
import * as userHelpers from "../helpers/userHelpers.js";
import { PlantillaNuevoUser } from "../helpers/emails/nuevoUsuario.js";
import UserDTO from "../model/DTOs/userDTO.js";
export class UserService {
  constructor() {
    this.userDao = UserDaoFactory.get(config.DB_NAME);
  }
  async getUsers() {
    const users = await this.userDao.getAll();
    return users.map((u) => new UserDTO(u));
  }
  async getUserById(id) {
    const user = await this.userDao.getById(id);
    return new UserDTO(user);
  }
  async createUser(user) {
    try {
      user.password = await userHelpers.encrypt(user.password);
      const u = await this.userDao.create(user);
      const newUser = new UserDTO(u);
      newUser.token = userHelpers.signToken(newUser);
      const mail = new PlantillaNuevoUser(user);
      mail.sendMail();
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  async logUser(email, password) {
    try {
      const user = await this.userDao.getUserByEmail(email);
      if (user && (await bcrypt.compare(password, user.password))) {
        const loggedUser = new UserDTO(user);
        loggedUser.token = userHelpers.signToken(loggedUser);
        return loggedUser;
      }
      const err = new ErrorCustom(
        `Invalid credentials`,
        401,
        "Authentication failed"
      );
      throw err;
    } catch (error) {
      throw error;
    }
  }
  async updateUser(user, id) {
    const updatedUser = await this.userDao.update(user, id);
    return new UserDTO(updatedUser);
  }
  async deleteUser(id) {
    const message = await this.userDao.deleteById(id);
    return message;
  }
}
