const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at', 
      updatedAt: 'updated_at',
  }
}