import { Schema } from "mongoose";

export const MoonSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true, toJSON: { virtuals: true }
  })

MoonSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

MoonSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})