const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true }))
// Middleware to parse JSON data (from API requests)
app.use(express.json())



// app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})