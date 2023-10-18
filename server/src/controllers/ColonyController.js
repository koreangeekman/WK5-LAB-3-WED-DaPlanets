import { Auth0Provider } from "@bcwdev/auth0provider";
import { colonyService } from "../services/ColonyService.js";
import BaseController from "../utils/BaseController.js";

export class ColonyController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .get('', this.getColonies)
      .get('/:colonyId', this.getColonyById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createColony)
  }

  async getColonies(req, res, nxt) {
    try {
      const colonies = await colonyService.getColonies();
      return res.send(colonies)
    } catch (error) {
      nxt(error)
    }
  }

  async getColonyById(req, res, nxt) {
    try {
      const colony = await colonyService.getColonyById(req.params.colonyId);
      return res.send(colony)
    } catch (error) {
      nxt(error)
    }
  }

  // vv AUTHORIZED USERS ONLY vv

  async createColony(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newColony = await colonyService.createColony(req.body);
      return res.send(newColony)
    } catch (error) {
      nxt(error)
    }
  }

}