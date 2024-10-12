'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  User.associate = function(models) {
    // A User has many Tasks
    User.hasMany(models.Task, { foreignKey: 'userId' });
  };
  
  return User;
};
