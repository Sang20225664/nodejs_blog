const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override'); 
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const mongoose = require('mongoose');

// Connect to database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON data (from API requests)
app.use(express.json());

app.use(methodOverride('_method'));

//Template engine 
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers:{
      sum: (a, b) => a + b,
      
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
