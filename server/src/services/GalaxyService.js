import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class GalaxyService {

  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find();
    return galaxies;
  }

}

export const galaxyService = new GalaxyService();