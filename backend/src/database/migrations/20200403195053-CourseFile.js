'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CourseFiles', {
      CouseId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      FileId: {
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
    return queryInterface.dropTable('CourseFiles');
  }
};
