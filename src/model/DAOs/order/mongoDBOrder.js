import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import { PlantillaNuevoPedido } from "../../../emails/nuevoPedido.js";
import { MensajeBase } from "../../../mensajes/mensajeClass.js";
import orderSchema from "../../modelos/orderSchema.js";

class MongoDBOrder extends MongoDBDAO {
  constructor() {
    super("Orders", orderSchema);
  }

  createOrder = (req, res, next) => {
    let body = req.body;

    super.create(body).then(
      (item) => {
        const mailPed = new PlantillaNuevoPedido(item);
        mailPed.sendMail();
        const messageWhatsapp = new MensajeBase(
          mailPed.subject,
          process.env.ADMIN_MAIL
        );
        messageWhatsapp.sendMessage(true);
        const messageCliente = new MensajeBase(
          `Hola ${item.user.name}👋 Recibimos tu pedido y se encuentra en proceso. Ecommerce✨`,
          item.user.phone
        );
        messageCliente.sendMessage();
        return res.json(item);
      },
      (error) => next(error)
    );
  };
  deleteOrder = (req, res, next) => {
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

  getOrders = (req, res, next) => {
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
  getOrderByUser = (req, res, next) => {
    let { userId } = req.query;
    if (userId) {
      super.getByField(userId).then(
        (product) => {
          return res.json(product);
        },
        (error) => {
          return next(error);
        }
      );
    }
  };
}
export default MongoDBOrder;
