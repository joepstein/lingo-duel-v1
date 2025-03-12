const express = require('express')
const app  = express()
const path = require('path')
const PORT = process.env.PORT || 3500

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', express.static(path.join(__dirname, 'dist')))

app.use(/^\/?(conjugation|skill-choice)/, require('./routes/root'))


app.listen(PORT)


