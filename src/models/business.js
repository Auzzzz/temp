("use strict");
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      b_owner: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'User',
          Key: 'id',
          as: 'b_owner'
        }
      },
      b_public_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_socials: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      b_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      b_address_public: {
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  Business.associate = function (models) {
    Business.belongsTo(models.User, { foreignKey: "id" });
    Business.hasMany(models.Business_Users, {foreignKey: 'b_id'})
  };
  return Business;
};
