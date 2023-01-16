'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable("Business_Lists",
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        b_id: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
            model: 'Business',
            Key: 'id',
            as: 'b_id'
          },
        },
        b_list_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        b_list_desc: {
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
    return queryInterface.dropTable('Business_User_List');
  }
};
