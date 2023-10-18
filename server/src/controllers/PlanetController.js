import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
  }

  async getPlanets(req, res, nxt) {
    try {
      const planets = await planetService.getPlanets();
      return res.send(planets)
    } catch (error) {
      nxt(error)
    }
  }

}