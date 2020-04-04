'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CourseVideos', {
      CouseId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      VideoId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ordem: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CourseVideos');
  }
};
