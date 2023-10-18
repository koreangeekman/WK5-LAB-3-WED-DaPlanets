import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy.js";
import { PlanetSchema } from "../models/Planet.js";
import { SpeciesSchema } from "../models/Species.js";
import { ColonySchema } from "../models/Colony.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Species = mongoose.model('Species', SpeciesSchema)
  Colonies = mongoose.model('Colony', ColonySchema)
}

export const dbContext = new DbContext()
