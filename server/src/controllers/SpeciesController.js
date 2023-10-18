import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getSpecies)
  }

  async getSpecies(req, res, nxt) {
    try {
      const species = await speciesService.getSpecies();
      return res.send(species)
    } catch (error) {
      nxt(error)
    }
  }
}