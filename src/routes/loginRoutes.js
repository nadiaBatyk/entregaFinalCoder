import { Router } from "express";
import * as daos from "../daos/index.js";
import multer from "multer";
const routerUsers = Router();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
 fileFilter:fileFilter
});

routerUsers
  .route("/register")
  .post(upload.single("userImage"), daos.userDao.createUser);

routerUsers.route("/login").post(daos.userDao.logUser);
routerUsers.route('/users').get(daos.userDao.getUsers)

export default routerUsers;
