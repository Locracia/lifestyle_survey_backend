const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Person = require('../models/person');

const Activity = sequelize.define('Activity', {
  i_like_to_eat_out: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  i_like_to_watch_movies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  i_like_to_watch_tv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  i_like_to_listen_to_the_radio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Activity.belongsTo(Person);

Activity.sync({ alter: true });
module.exports = Activity;
