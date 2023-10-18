import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class MoonService {

  async getMoons() {
    const moons = await dbContext.Moons.find();
    return moons;
  }

  async getMoonById(moonId) {
    const moon = await dbContext.Moons.findById(moonId);
    if (moon) { throw new BadRequest(`Unable to locate moon by ID: ${moonId}`) }
    return moon;
  }


}

export const moonService = new MoonService();