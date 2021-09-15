import BaseController from '../utils/BaseController.js'
import { starsService } from '../services/StarsService.js'
export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .get('/:starId', this.getStar)
      .post('', this.createStar)
      .put('/:starId', this.updateStar)
  }

  async getStars(req, res, next) {
    try {
      const stars = await starsService.getStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.starId)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async updateStar(req, res, next) {
    try {
      const galaxy = await starsService.updateStar(req.params.starId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
