const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Course = require('../models/course');
const Video = require('../models/video');
const File = require('../models/file');

const connection = new Sequelize(dbConfig);

User.init(connection);
Course.init(connection);
Video.init(connection);
File.init(connection);

Course.associate(connection.models);
//Video.associate(connection.models);

module.exports = connection;