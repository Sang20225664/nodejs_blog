const newsRouter = require('./news');
const siteRouter = require('./site');
const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const meRouter = require('./me');
const CourseRouter = require('./courses');
const newsController = require('../app/controllers/NewsController');

function route(app) {
  app.get('/news', newsRouter);
  app.get('/', siteRouter);
  app.use('/courses', CourseRouter);
  app.use('/me', meRouter);
  // app.use('/news', newsRouter)
}

module.exports = route;
