import { Schema } from "mongoose"

export const ColonySchema = new Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  planetId: { type: String, required: true },
  speciesId: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
},
  {
    timestamps: true, toJSON: { virtuals: true }
  })

ColonySchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})