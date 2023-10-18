import { Schema } from "mongoose"

export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  homePlanetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true, toJSON: { virtuals: true }
  })

SpeciesSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

SpeciesSchema.virtual('homePlanet', {
  localField: 'homePlanetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})