const { Model, DataTypes } = require('sequelize');

class File extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      file: DataTypes.STRING,
      free: DataTypes.BOOLEAN
    }, {});
  }
};

File.associate = function(models) {
  Course.belongsToMany(models.Course, { through: 'CourseFile' })
};

module.exports = File;