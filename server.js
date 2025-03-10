const express = require('express')
const app  = express()
const PORT = process.env.PORT || 3500

app.use('/', express.static(path.join(__dirname, 'dist')))

app.use('/', require('./routes/root'))

app.listen(PORT)


