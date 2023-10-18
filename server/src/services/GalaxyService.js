import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class GalaxyService {

  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find();
    return galaxies;
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId);
    if (!galaxy) { throw new BadRequest(`Unable to locate galaxy by ID: ${galaxyId}`) }
    return galaxy;
  }

  // vv AUTHORIZED USERS ONLY vv

  async createGalaxy(body) {
    const newGalaxy = await dbContext.Galaxies.create(body);
    return newGalaxy;
  }

}

export const galaxyService = new GalaxyService();