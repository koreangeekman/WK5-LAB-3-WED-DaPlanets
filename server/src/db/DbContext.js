import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxies', GalaxySchema)
  Planets = mongoose.model('Planets', PlanetSchema)
  Species = mongoose.model('Species', SpeciesSchema)
  Colonies = mongoose.model('Colonies', ColonySchema)
}

export const dbContext = new DbContext()
