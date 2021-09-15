import mongoose from 'mongoose'

export const StarSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlegth: 30 },
  starId: { type: mongoose.Schema.Types.ObjectId },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Galaxy', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
