const Schema = require('mongoose').Schema;
const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
const slugUpdater = require('mongoose-slug-updater');
mongoose.plugin(slugUpdater);

const Course = new Schema({
  name: { type: String, required: true, kMaxLength: 255 },
  description: { type: String,  kMaxLength: 600 },
  image: { type: String,  kMaxLength: 255 },
  videoID: { type: String, required: true, kMaxLength: 255 },
  level: { type: String,  kMaxLength: 255 },
  slug: { type: String, slug: 'name', unique: true },
  
}, {
  timestamps: true,
  
}
);

module.exports = mongoose.model('Course', Course);