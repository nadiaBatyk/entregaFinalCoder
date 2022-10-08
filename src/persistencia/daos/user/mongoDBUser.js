import MongoClass from "../../contenedores/mongoClass.js";
import userSchema from "../../schemas/userSchema.js";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class MongoDBUsers extends MongoClass {
  constructor() {
    super("Users", userSchema);
  }

  getUsers = (req, res, next) => {
    let { id } = req.params;
    if (id) {
      super.getById(id).then(
        (product) => {
          return res.json(product);
        },
        (error) => {
          return next(error);
        }
      );
    } else {
      super.getAll().then(
        (lista) => {
          return res.json(lista);
        },
        (error) => next(error)
      );
    }
  };
  createUser = async (req, res, next) => {
    try {
      let body = req.body;
      if (Object.values(body).some((v) => !v))
        return res.status(400).json({ message: `All items are required` });

      const oldUser = await this.collection.findOne({ email: body.email });

      if (oldUser)
        return res
          .status(409)
          .json({ message: `User already exist. Please log in` });
        console.log(req.file);
      let encryptedPass = await bcrypt.hash(body.password, 10);
      body.password = encryptedPass;
      body.email = body.email.toLowerCase();
      if(req.file){
        body.userImage = req.file.path.replace(/\\/g, "/")
      }else{
        body.userImage=null
      }
      
      const user = await super.create(body);
      const token = jwt.sign(
        { userId: user._id, email: body.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      /* const mail = new PlantillaNuevoUser(user);
      mail.sendMail(); */
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
  logUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (Object.values(req.body).some((v) => !v))
        return res.status(400).json({ message: `All items are required` });
      const user = await this.collection.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { userId: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );
        user.token = token;

        return res.status(200).json(user);
      }
      return res.status(400).json({ message: `Invalid credentials` });
    } catch (error) {
      next(error);
    }
  };

  updateUser = (req, res, next) => {
    let { id } = req.params;
    let body = req.body;
    if (id) {
      super.update(body).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
  deleteUser = (req, res, next) => {
    let { id } = req.params;
    if (id) {
      super.deleteById(id).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
}
export default MongoDBUsers;
