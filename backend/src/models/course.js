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
    }, { sequelize: connection, modelName: 'courses' });
  }

  static associate(models) {
    this.belongsToMany(models.videos, {
      foreignKey: 'course_id',
      through: 'courses_videos',
      as: 'videos',
    });
    this.belongsToMany(models.files, {
      foreignKey: 'course_id',
      through: 'courses_files',
      as: 'files'
    });
  }
};

module.exports = Course;