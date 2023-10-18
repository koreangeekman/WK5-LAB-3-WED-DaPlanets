import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class PlanetService {

  async getPlanets() {
    const planets = await dbContext.Planets.find();
    return planets;
  }

  async getPlanetById(planetId) {
    const planet = await dbContext.Planets.findById(planetId);
    if (!planet) { throw new BadRequest(`Unable to locate Planet by ID: ${planetId}`) }
    return planet;
  }

  // vv AUTHORIZED USERS ONLY vv

  async createPlanet(body) {
    const newPlanet = await dbContext.Planets.create(body);
    return newPlanet;
  }

}

export const planetService = new PlanetService();