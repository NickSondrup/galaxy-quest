import mongoose from 'mongoose'

export const PlanetSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  planetId: { type: mongoose.Schema.Types.ObjectId },
  starId: { type: mongoose.Schema.Types.ObjectId, ref: 'Star', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
