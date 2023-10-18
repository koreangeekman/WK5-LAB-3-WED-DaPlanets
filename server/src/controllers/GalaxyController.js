import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";
import { planetService } from "../services/PlanetService.js";

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGalaxy)
    // .put('/:galaxyId', this.updateGalaxy)
    // .delete('/:galaxyId', this.removeGalaxy)
  }

  async getGalaxies(req, res, nxt) {
    try {
      const galaxies = await galaxyService.getGalaxies();
      return res.send(galaxies)
    } catch (error) {
      nxt(error)
    }
  }

  async getGalaxyById(req, res, nxt) {
    try {
      const galaxy = await galaxyService.getGalaxyById(req.params.galaxyId);
      return res.send(galaxy)
    } catch (error) {
      nxt(error)
    }
  }

  async getPlanetsByGalaxyId(req, res, nxt) {
    try {
      const planets = await planetService.getPlanetsByGalaxyId(req.params.galaxyId);
      return res.send(planets)
    } catch (error) {
      nxt(error)
    }
  }

  // vv AUTHORIZED USERS ONLY vv

  async createGalaxy(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newGalaxy = await galaxyService.createGalaxy(req.body);
      return res.send(newGalaxy)
    } catch (error) {
      nxt(error)
    }
  }

}