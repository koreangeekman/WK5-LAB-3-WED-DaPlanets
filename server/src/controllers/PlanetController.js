import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .get('/:planetId', this.getPlanetById)
      .use('', this.getPlanets)
      .post('', this.createPlanet)
  }

  async getPlanets(req, res, nxt) {
    try {
      const planets = await planetService.getPlanets();
      return res.send(planets)
    } catch (error) {
      nxt(error)
    }
  }

  async getPlanetById(req, res, nxt) {
    try {
      const planet = await planetService.getPlanetById(req.params.planetId);
      return res.send(planet)
    } catch (error) {
      nxt(error)
    }
  }

  // vv AUTHORIZED USERS ONLY vv

  async createPlanet(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newPlanet = await planetService.createPlanet(req.body);
      return res.send(newPlanet)
    } catch (error) {
      nxt(error)
    }
  }

}