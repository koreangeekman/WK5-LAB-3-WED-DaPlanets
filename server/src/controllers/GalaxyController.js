import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
  }

  async getGalaxies(req, res, nxt) {
    try {
      const galaxies = await galaxyService.getGalaxies();
      return res.send(galaxies)
    } catch (error) {
      nxt(error)
    }
  }
}