import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class ColonyService {

  async getColonies() {
    const colonies = await dbContext.Colonies.find();
    return colonies;
  }
  async getColonyById(colonyId) {
    const colony = await dbContext.Colonies.findById(colonyId);
    return colony;
  }

  // vv AUTHORIZED USERS ONLY vv

  async createColony(body) {
    const newColony = await dbContext.Colonies.create(body);
    return newColony;
  }

}

export const colonyService = new ColonyService();