import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  type: { type: String, required: true, maxLength: 100 },
  imgUrl: { type: String, required: true, maxLength: 300 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true, toJSON: { virtuals: true }
  })

GalaxySchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})