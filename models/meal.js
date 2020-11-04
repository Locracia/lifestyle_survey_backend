const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Person = require('../models/person');

const Meal = sequelize.define('Meal', {
  pizza: {
    type: DataTypes.INTEGER,
  },
  pasta: {
    type: DataTypes.INTEGER,
  },
  pap_and_wors: {
    type: DataTypes.INTEGER,
  },
  chicken_and_stir_fry: {
    type: DataTypes.INTEGER,
  },
  beef_stir_fry: {
    type: DataTypes.INTEGER,
  },
  other: {
    type: DataTypes.INTEGER,
  },
});

Meal.belongsTo(Person);

Meal.sync({ alter: true });
module.exports = Meal;
