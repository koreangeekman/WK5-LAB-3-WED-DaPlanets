import { Schema } from "mongoose"

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  biome: { type: String, required: true, maxLength: 100 },
  atmosphere: { type: Boolean, required: true, default: false },
  size: { type: String, required: true, maxLength: 20 },
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true, toJSON: { virtuals: true }
  })

PlanetSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})