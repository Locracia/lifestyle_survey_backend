const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Person = sequelize.define('Person', {
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Person.sync({ alter: true });
module.exports = Person;
