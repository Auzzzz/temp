("use strict");
module.exports = (sequelize, DataTypes) => {
  const Business_User_List = sequelize.define(
    "Business_User_List",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      list_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Business_Lists",
          Key: "id",
          as: "list_id",
        },
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "User",
          Key: "id",
          as: "userId",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Business_User_List.associate = function (models) {
    Business_User_List.belongsTo(models.Business, { foreignKey: "id" });
    Business_User_List.belongsTo(models.Users, { foreignKey: "id" });
  };
  return Business_User_List;
};
