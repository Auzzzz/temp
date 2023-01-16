'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable("Business_User_List",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'User',
            Key: 'id',
            as: 'userId'
          },
        },
        listId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Business_Lists",
            Key: "id",
            as: "listId",
          },
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
    return queryInterface.dropTable('Business_User_List');
  }
};
