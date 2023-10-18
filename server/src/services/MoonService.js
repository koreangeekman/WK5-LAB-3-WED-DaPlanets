import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class MoonService {

  async getMoons() {
    const moons = await dbContext.Moons.find().populate('planet');
    return moons;
  }

  async getMoonById(moonId) {
    const moon = await dbContext.Moons.findById(moonId).populate('planet');
    if (!moon) { throw new BadRequest(`Unable to locate moon by ID: ${moonId}`) }
    return moon;
  }


  async getMoonsByPlanetId(planetId) {
    const moons = await dbContext.Moons.find({ planetId: planetId }).populate('planet');
    if (!moons) { throw new BadRequest(`Unable to locate Moon by Planet ID: ${planetId}`) }
    return moons;
  }



  // vv AUTHORIZED USERS ONLY vv

  async createMoon(body) {
    const newMoon = await dbContext.Moons.create(body);
    return newMoon;
  }

}

export const moonService = new MoonService();