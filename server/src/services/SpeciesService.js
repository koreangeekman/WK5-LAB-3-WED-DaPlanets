import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class SpeciesService {

  async getSpecies() {
    const species = await dbContext.Species.find();
    return species;
  }

}

export const speciesService = new SpeciesService();