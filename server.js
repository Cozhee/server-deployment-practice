'use strict'

const express = require('express')
const app = express()

const baseRoute = require('./modules/baseRoute.js')
const helloRoute = require('./modules/helloRoute.js')

const PORT = process.env.PORT || 3001

app.get('/', baseRoute)

app.get('/hello', helloRoute)

function start() {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
}

module.exports = {app, start}