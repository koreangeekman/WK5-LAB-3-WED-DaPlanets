import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";
import { moonService } from "../services/MoonService.js";
import { colonyService } from "../services/ColonyService.js";

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .get('/:planetId', this.getPlanetById)
      .get('/:planetId/moons', this.getMoonsByPlanetId)
      .get('/:planetId/colonies', this.getColoniesByPlanetId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlanet)
    // .put('/:planetId', this.updatePlanet)
    // .delete('/:planetId', this.removePlanet)
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

  async getMoonsByPlanetId(req, res, nxt) {
    try {
      const moons = await moonService.getMoonsByPlanetId(req.params.planetId);
      return res.send(moons)
    } catch (error) {
      nxt(error)
    }
  }

  async getColoniesByPlanetId(req, res, nxt) {
    try {
      const colonies = await colonyService.getColoniesByPlanetId(req.params.planetId);
      return res.send(colonies)
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