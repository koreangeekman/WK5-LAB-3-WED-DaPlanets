import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class PlanetService {

  async getPlanets() {
    const planets = await dbContext.Planets.find().populate('galaxy');
    return planets;
  }

  async getPlanetById(planetId) {
    const planet = await dbContext.Planets.findById(planetId).populate('galaxy');
    if (!planet) { throw new BadRequest(`Unable to locate Planet by ID: ${planetId}`) }
    return planet;
  }

  async getPlanetsByGalaxyId(galaxyId) {
    const planet = await dbContext.Planets.find({ galaxyId: galaxyId }).populate('galaxy');
    if (!planet) { throw new BadRequest(`Unable to locate Planets by Galaxy ID: ${galaxyId}`) }
    return planet;
  }



  // vv AUTHORIZED USERS ONLY vv

  async createPlanet(body) {
    const newPlanet = await dbContext.Planets.create(body);
    return newPlanet;
  }

}

export const planetService = new PlanetService();