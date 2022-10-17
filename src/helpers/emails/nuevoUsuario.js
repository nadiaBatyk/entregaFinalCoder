import { PlantillaMail } from "./plantillaBase.js";

import config from "../../config/config.js";

export class PlantillaNuevoUser extends PlantillaMail {
  constructor(user) {
    super(
      config.ADMIN_MAIL,
      `Nuevo usuario registrado 💃`,
      `Nombre:${user.fullName} - Email:${user.email} - Direccion:${
        user?.address || "no tiene"
      } - Teléfono: ${user?.phone || "no tiene"}`
    );
  }
}
