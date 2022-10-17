import { PlantillaMail } from "./plantillaBase.js";
import dotenv from "dotenv";
dotenv.config();
export class PlantillaNuevoUser extends PlantillaMail{
    constructor(user){
        super(process.env.ADMIN_MAIL,`Nuevo usuario registrado 💃`,`Nombre:${user.name} - Email:${user.email} - Direccion:${user?.address || 'no tiene'} - Teléfono: ${user?.phone || 'no tiene'}`)
      
    }
}