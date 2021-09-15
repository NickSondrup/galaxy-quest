import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async getStars(query) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }

  async getStarById(starId) {
    const star = await dbContext.Galaxies.findById(starId)
    if (!star) {
      throw new BadRequest('invalid star id')
    }
    return star
  }

  async updateStar(starId, starData) {
    const star = await this.getStarById(starId)
    star.name = starData.name || star.name
    await star.save()
    return star
  }
}

export const starsService = new StarsService()
