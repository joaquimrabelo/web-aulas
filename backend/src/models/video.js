const { Model, DataTypes } = require('sequelize');

class Video extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.TEXT,
      photo: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      free: DataTypes.BOOLEAN
    }, { sequelize });
  }
};

Video.associate = function(models) {
  Course.belongsToMany(models.Course, { through: 'CourseVideo' })
};

module.exports = Video;