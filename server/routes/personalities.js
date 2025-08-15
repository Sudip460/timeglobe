const express = require('express')
const router = express.Router()
const Personality = require('../models/Personality')

// Get all personalities
router.get('/', async (req, res) => {
  try {
    const personalities = await Personality.find()
    res.json(personalities)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Search personalities
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query
    const results = await Personality.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } })
    
    res.json(results)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// AI Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { personalityId, message, history } = req.body
    
    // Get personality data
    const personality = await Personality.findById(personalityId)
    if (!personality) {
      return res.status(404).json({ message: 'Personality not found' })
    }
    
    // Here you would integrate with OpenAI API
    // This is a simplified placeholder response
    const reply = `As ${personality.name}, I would say: That's an interesting question about "${message}". In my time, we...`
    
    res.json({ reply })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
