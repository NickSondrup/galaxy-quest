import mongoose from 'mongoose'

export const GalaxySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlegth: 30 },
  galaxyId: { type: mongoose.Schema.Types.ObjectId }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
