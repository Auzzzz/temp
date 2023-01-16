("use strict");
module.exports = (sequelize, DataTypes) => {
  const Business_Users = sequelize.define(
    "Business_Users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      b_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Business',
          Key: 'id',
          as: 'b_id'
        },
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'User',
          Key: 'id',
          as: 'userId'
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
      
      
    },
    {}
  );
  Business_Users.associate = function (models) {
    Business_Users.belongsTo(models.Business, { foreignKey: "id" });
    Business_Users.belongsTo(models.User, { foreignKey: "id" });
  };
  return Business_Users;
};
