const express = require('express')

const authService = require('./auth.service')

const router = express.Router()

module.exports = ['/auth', router]

router.post('/sign-up', (req, res) => {
  // authService.signUp

  res.json({ success: true })
})

router.post('/sign-in', (req, res) => {
  // authService.signUp

  res.json({ success: true })
})
