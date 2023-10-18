import { colonyService } from "../services/ColonyService.js";
import BaseController from "../utils/BaseController.js";

export class ColonyController extends BaseController {
  constructor() {
    super('api/colony')
    this.router
      .get('', this.getColonies)
  }

  async getColonies(req, res, nxt) {
    try {
      const colonies = await colonyService.getColonies();
      return res.send(colonies)
    } catch (error) {
      nxt(error)
    }
  }
}