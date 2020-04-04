const { Model, DataTypes } = require('sequelize');

class Course extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      photo: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      free: DataTypes.BOOLEAN,
      validity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      promo_price: DataTypes.DECIMAL
    }, { sequelize: connection });
  }

  static associate(models) {
    this.belongsToMany(models.Video, {
      foreignKey: 'CourseId',
      through: 'CourseVideos',
      as: 'videos'
    });
    this.belongsToMany(models.File, {
      foreignKey: 'CourseId',
      through: 'CourseFiles',
      as: 'files'
    });
  }
};

/* Course.associate = function(models) {
  Course.belongsToMany(models.Video, { through: 'CourseVideo' })
  Course.belongsToMany(models.File, { through: 'CourseFile' })
}; */

module.exports = Course;