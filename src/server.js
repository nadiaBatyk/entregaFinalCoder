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
import sessionConfig from "./config/MongosessionConfig.js";
import session from "express-session";
import path from "path";
import { engine } from "express-handlebars";
import routerInfo from "./routes/infoRoutes.js";
import http from "http";
import { Server as ioServer } from "socket.io";
import webSockets from "./helpers/webSockets.js";
const __dirname = path.resolve();
//servidor
const app = express();
//SERVIDOR HTTP CON FUNCIONALIDADES DE APP (EXPRESS)
const httpServer = http.createServer(app);
//SERVIDOR WEBSOCKET CON FUNCIONALIDADES DE HTTP
const socketServer = new ioServer(httpServer);
//conexion DB
connectDB();

//middlewares
app.use(compression());
app.use(express.json());
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/src/public"));

//MOTOR DE PLANTILLAS
app.set("view engine", "hbs");
///CONFIGURACION HANDLEBARS
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/src/views/layouts",
  })
);

//DONDE ESTAN LOS ARCHIVOS DE PLANTILLA
app.set("views", "src/views");

//rutas
app.use("/", routerLogin);
app.use("/productos", routerProducts);
app.use("/carrito", routerCart);
//app.use("/orders", routerOrder);
//app.use("/chat");
app.use("/config", routerInfo);

// app.get("*.ico", function () {});
/* app.use("*", notFoundRouter);
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status).json({ status: err.status, message: err.message });
}); */
socketServer.on('connection',webSockets.connection)
const PORT = config.PORT;
const server = httpServer.listen(PORT, () => {
  logger.info(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`error en el servidor ${error}`));
