const { Model, DataTypes } = require('sequelize');

class Video extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.TEXT,
      photo: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      free: DataTypes.BOOLEAN
    }, { sequelize: connection });
  }

};

module.exports = Video;