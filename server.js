const express = require('express')
const mongoose = require('mongoose')
const vehicleRoutes = require('./controllers/vehicle')
require('dotenv').config()

const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.json())

app.use('/vehicle', vehicleRoutes)

app.get('/', (req, res) => {
  res.render('home')
})

//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))

module.exports = app;
