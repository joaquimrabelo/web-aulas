const { Model, DataTypes } = require('sequelize');

class File extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      file: DataTypes.STRING,
      free: DataTypes.BOOLEAN
    }, { sequelize: connection, modelName: 'files'});
  }
};

module.exports = File;