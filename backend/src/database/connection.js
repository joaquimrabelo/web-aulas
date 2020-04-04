const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Course = require('../models/course');
const Video = require('../models/video');
const File = require('../models/file');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Course.init(sequelize);
Video.init(sequelize);
File.init(sequelize);

module.exports = sequelize;