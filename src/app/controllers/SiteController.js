const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // GET /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      console.log(courses); // Log dữ liệu để kiểm tra
      res.render('home', { courses: multipleMongooseToObject(courses) });
    } catch (err) {
      console.error(err); // Log lỗi để kiểm tra
      res.status(400).json({ error: 'Error fetching courses' });
    }
  }
  

  // GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();