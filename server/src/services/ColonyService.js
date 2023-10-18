import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";


class ColonyService {

  async getColonies() {
    const colonies = await dbContext.Colonies.find();
    return colonies;
  }

}

export const colonyService = new ColonyService();