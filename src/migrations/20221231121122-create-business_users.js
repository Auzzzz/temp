"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Business_Users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      b_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Business",
          Key: "id",
          as: "b_id",
        },
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "User",
          Key: "id",
          as: "userId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Business_Users");
  },
};
