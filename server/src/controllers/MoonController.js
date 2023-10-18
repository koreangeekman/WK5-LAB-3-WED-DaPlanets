import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { moonService } from "../services/MoonService.js";

export class MoonController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getMoons)
      .get('/:moonId', this.getMoonById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMoon)
  }

  async getMoons(req, res, nxt) {
    try {
      const moons = await moonService.getMoons();
      return res.send(moons)
    } catch (error) {
      nxt(error)
    }
  }

  async getMoonById(req, res, nxt) {
    try {
      const moon = await moonService.getMoonById(req.params.moonId);
      return res.send(moon)
    } catch (error) {
      nxt(error)
    }
  }

  async createMoon(req, res, nxt) {
    try {
      req.body.creatorId = req.userInfo.id
      const newMoon = await moonService.createMoon(req.body);
      return res.send(newMoon)
    } catch (error) {
      nxt(error)
    }
  }

}