const { Model, DataTypes } = require('sequelize');

class File extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      file: DataTypes.STRING,
      free: DataTypes.BOOLEAN
    }, { sequelize: connection});
  }
};

File.associate = function(models) {
  Course.belongsToMany(models.Course, { through: 'CourseFile' })
};

module.exports = File;