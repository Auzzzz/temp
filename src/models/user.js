const { Sequelize, DataTypes, Model } = require('sequelize');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      user_public_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_FA_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );  User.associate = function(models) {
        User.hasMany(models.Business, {foreignKey: 'userId', as: 'business'})
        User.hasMany(models.Business_Users, {foreignKey: 'userId', as: 'business'})
        User.hasMany(models.Business_User_List, {foreignKey: 'userId', as: 'business'})
        
  };
  return User;
};