import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class ColonyService {

  async getColonies() {
    const colonies = await dbContext.Colonies.find();
    return colonies;
  }
  async getColonyById(colonyId) {
    const colony = await dbContext.Colonies.findById(colonyId);
    if (!colony) { throw new BadRequest(`Unable to locate Colony by ID: ${colonyId}`) }
    return colony;
  }

  async getColoniesBySpecies(speciesId) {
    const colonies = await dbContext.Colonies.find({ speciesId: speciesId });
    if (!colonies) { throw new BadRequest(`Unable to locate Colonies by Species ID: ${speciesId}`) }
    return colonies;
  }

  // vv AUTHORIZED USERS ONLY vv

  async createColony(body) {
    const newColony = await dbContext.Colonies.create(body);
    return newColony;
  }

}

export const colonyService = new ColonyService();