import { Router } from "express";
import { ErrorCustom } from "../helpers/errorCustom.js";

const notFoundRouter = Router();
notFoundRouter.route("/").get((req, res, next) => {
  const err = new ErrorCustom(
    `Error ruta ${req.baseUrl}, metodo ${req.method} no implementada`,
    404,
    "Not Implemented"
  );
  throw err;
});
notFoundRouter.route("/").post((req, res, next) => {
    const err = new ErrorCustom(
      `Error ruta ${req.baseUrl}, metodo ${req.method} no implementada`,
      404,
      "Not Implemented"
    );
    throw err;
  });
  notFoundRouter.route("/").put((req, res, next) => {
    const err = new ErrorCustom(
      `Error ruta ${req.baseUrl}, metodo ${req.method} no implementada`,
      404,
      "Not Implemented"
    );
    throw err;
  });
  notFoundRouter.route("/").delete((req, res, next) => {
    const err = new ErrorCustom(
      `Error ruta ${req.baseUrl}, metodo ${req.method} no implementada`,
      404,
      "Not Implemented"
    );
    throw err;
  });


export default notFoundRouter;
