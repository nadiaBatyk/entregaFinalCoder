import { InfoService } from "../services/infoService.js";

export class InfoController {
  constructor() {
    this.infoService = new InfoService();
  }
  getInfo = async (req, res, next) => {
    try {
      let data = await this.infoService.getInfo();
      res.render("layouts/info", {
        layout: "info",
        data,
      });
    } catch (error) {
      return next(error);
    }
  };
}
