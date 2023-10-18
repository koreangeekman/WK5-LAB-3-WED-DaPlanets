import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class SpeciesService {

  async getSpecies() {
    const species = await dbContext.Species.find();
    return species;
  }

  async getSpeciesById(speciesId) {
    const species = await dbContext.Species.findById(speciesId);
    if (!species) { throw new BadRequest(`Unable to identify Species by ID: ${speciesId}`) }
    return species;
  }

  // vv AUTHORIZED USERS ONLY vv

  async createSpecies(body) {
    const species = await dbContext.Species.create(body);
    return species;
  }

}

export const speciesService = new SpeciesService();