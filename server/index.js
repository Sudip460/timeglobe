require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const personalityRoutes = require('./routes/personalities')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/timeglobe')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

// Routes
app.use('/api/personalities', personalityRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
