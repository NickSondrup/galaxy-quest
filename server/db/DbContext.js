import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy.js'
import { MoonSchema } from '../models/Moon.js'
import { PlanetSchema } from '../models/Planet.js'
import { StarSchema } from '../models/Star.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moon = mongoose.model('Moon', MoonSchema);
}

export const dbContext = new DbContext()
