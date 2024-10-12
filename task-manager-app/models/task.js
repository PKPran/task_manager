'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  
  Task.associate = function(models) {
    // A Task belongs to a User
    Task.belongsTo(models.User, { foreignKey: 'userId' });
  };
  
  return Task;
};
