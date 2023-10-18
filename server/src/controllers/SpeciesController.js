import { Auth0Provider } from "@bcwdev/auth0provider";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getSpecies)
      .get('/:speciesId', this.getSpecies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.getSpecies)
  }

  async getSpecies(req, res, nxt) {
    try {
      const species = await speciesService.getSpecies();
      return res.send(species)
    } catch (error) {
      nxt(error)
    }
  }

  async getSpeciesById(req, res, nxt) {
    try {
      const species = await speciesService.getSpeciesById(req.params.speciesId);
      return res.send(species)
    } catch (error) {
      nxt(error)
    }
  }

  // vv AUTHORIZED USERS ONLY vv

  async createSpecies(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newSpecies = await speciesService.createSpecies(req.body);
      return res.send(newSpecies)
    } catch (error) {
      nxt(error)
    }
  }

}