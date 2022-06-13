const express = require('express')
const app = express()

const baseRoute = require('./modules/baseRoute.js')

const PORT = process.env.PORT || 3001

app.get('/', baseRoute)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
