'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable("Business",
     {
       id: {
         type: Sequelize.STRING,
         allowNull: false,
         primaryKey: true,
       },
       b_owner: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'User',
          Key: 'id',
          as: 'b_owner'
        }
      },
       b_public_name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       b_phone_no: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       b_email: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       b_socials: {
         type: Sequelize.JSON,
         allowNull: false,
       },
       b_address: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       b_address_public: {
         type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('Business');
  }
};
