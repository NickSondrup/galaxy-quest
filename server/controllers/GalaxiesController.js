import BaseController from '../utils/BaseController.js'
import { galaxiesService } from '../services/GalaxiesService.js'
export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .post('', this.createGalaxy)
      .put('/:galaxyId', this.updateGalaxy)
  }

  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async updateGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.updateGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
