const express = require('express')
const cookieParser = require('cookie-parser')

const { PORT } = require('./config/server.config')

const app = express()
app.use(express.json())
app.use(express.text())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  res.status(200).json({
    message: 'Pong'
  })
})

app.listen(PORT, () => {
  console.log(`Express app connected to http://localhost:${PORT} 🔥`)
})