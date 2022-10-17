import express from "express";
import routerCart from "./routes/cartRoutes.js";
import notFoundRouter from "./routes/notFound.js";
import routerProducts from "./routes/productRoutes.js";
import verifyToken from "./middlewares/auth.js";
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
import { Server } from "socket.io";
import routerChat from "./routes/chatRoutes.js";
import { socketConnect } from "./helpers/webSockets.js";
import routerOrder from "./routes/orderRoutes.js";
import routerUsers from "./routes/userRoutes.js";
const __dirname = path.resolve();
//servidor
const app = express();
//SERVIDOR HTTP CON FUNCIONALIDADES DE APP (EXPRESS)
const httpServer = http.createServer(app);
//SERVIDOR WEBSOCKET CON FUNCIONALIDADES DE HTTP
const io = new Server(httpServer);
//conexion DB
connectDB();

//middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
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
//funcionalidad servidor websocket
io.on("connection", socketConnect);
//rutas
app.use("/", routerUsers);
app.use("/productos", routerProducts);
app.use("/carrito", routerCart);
app.use("/orders", routerOrder);
app.use("/chat", verifyToken, routerChat);
app.use("/config", verifyToken, routerInfo);

app.get("*.ico", function () {});
app.use("*", notFoundRouter);
app.use((err, req, res, next) => {
  logger.error(err);
  const errorDescription = {
    status: err.status,
    message: err.message,
    name: err.name,
  };
  res.render("layouts/error", { layout: "error", errorDescription });
});
const PORT = config.PORT;
const server = httpServer.listen(PORT, () => {
  logger.info(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`error en el servidor ${error}`));
