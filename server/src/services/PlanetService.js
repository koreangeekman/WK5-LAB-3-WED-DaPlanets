import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class PlanetService {

  async getPlanets() {
    const planets = await dbContext.Planets.find();
    return planets;
  }

}

export const planetService = new PlanetService();