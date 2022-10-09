import express from "express";
import routerCart from "./routes/cartRoutes.js";
//import notFoundRouter from "./routes/notFound.js";
import routerProducts from "./routes/productRoutes.js";
import routerLogin from "./routes/loginRoutes.js";
import verifyToken from "./middlewares/auth.js";
//import routerOrder from "./routes/orderRoutes.js";
import logger from "./config/winstonConfig.js";
import compression from "compression";
import config from "./config/config.js";
import connectDB from "./model/db/mongoDB/dbConnect.js";

//servidor
const app = express();
//conexion DB
connectDB();

//middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use("/uploads", express.static(process.cwd() + "/uploads"));
app.use("/api/productos", routerProducts);
app.use("/api/carrito", routerCart);
// app.use("/api/orders", verifyToken, routerOrder);
app.use("/", routerLogin);
// app.get("*.ico", function () {});
/* app.use("*", notFoundRouter);
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status).json({ status: err.status, message: err.message });
}); */

const PORT = config.PORT;
const server = app.listen(PORT, () => {
  logger.info(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`error en el servidor ${error}`));
