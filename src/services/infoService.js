import config from "../config/config.js";
import parsedArgs from "minimist";
import os from "os";
export class InfoService {
  async getInfo() {
    return {
      nombre: process.platform,
      version: process.version,
      memoria: process.memoryUsage().heapUsed.toString(),
      path: process.execPath,
      pId: process.pid,
      carpeta: process.cwd(),
      cantProcesadores: os.cpus().length,
      entornoDesarrollo: config.NODE_ENV == "dev" ? "Desarrollo" : "Producción",
      puerto: config.PORT,
      persistencia: config.DB_NAME,
      adminMail: config.ADMIN_MAIL,
    };
  }
}
