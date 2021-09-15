
import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class GalaxiesService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('invalid galaxy id')
    }
    return galaxy
  }

  async updateGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)
    galaxy.name = galaxyData.name || galaxy.name
    await galaxy.save()
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()
