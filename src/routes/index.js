const newsRouter = require('./news');
const siteRouter = require('./site');
const CourseRouter = require('./courses');

function route(app) {
  app.get('/news', newsRouter);
  app.get('/', siteRouter);
  app.use('/courses', CourseRouter);
  // app.use('/news', newsRouter)
}

module.exports = route;
