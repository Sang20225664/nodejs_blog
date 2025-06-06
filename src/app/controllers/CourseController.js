const Course = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
const { nextTick } = require('process');

class CourseController {
  // GET /:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {
      res.render('courses/show', { course: mongooseToObject(course) });
    }
    ).catch(next)
  }

  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course.save()
      .then(() => res.redirect('/'))
      .catch((error) => {

      });
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/edit', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();