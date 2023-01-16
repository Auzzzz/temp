'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('User',{
        id: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
        },
        user_public_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_fname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_lname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_FA_ID: {
          type: Sequelize.STRING,
          allowNull: false,
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

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};
