import mongoose from 'mongoose'

export const MoonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 20 },
  moonId: { type: mongoose.Schema.Types.ObjectId },
  planetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet', required: true }
})
