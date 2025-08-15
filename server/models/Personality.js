const mongoose = require('mongoose')

const personalitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthYear: { type: Number, required: true },
  deathYear: { type: Number },
  country: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  category: { 
    type: String, 
    enum: ['scientist', 'philosopher', 'ruler', 'writer', 'artist', 'revolutionary'],
    required: true
  },
  bio: { type: String, required: true },
  timeline: [{
    year: Number,
    event: String
  }],
  quotes: [String],
  sources: [String],
  imageUrl: String
})

// Create text index for search
personalitySchema.index({ name: 'text', bio: 'text', country: 'text' })

module.exports = mongoose.model('Personality', personalitySchema)
