import { moonService } from "../services/MoonService.js";
import BaseController from "../utils/BaseController.js";


export class MoonController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getMoons)
      .get('/:moonId', this.getMoonById)
  }

  async getMoons(req, res, nxt) {
    try {
      const moons = await moonService.getMoons();
      return res.send(moons)
    } catch (error) {
      nxt(error)
    }
  }

  async getMoonById(req, res, nxt) {
    try {
      const moon = await moonService.getMoonById(req.params.moonId);
      return res.send(moon)
    } catch (error) {
      nxt(error)
    }
  }

}