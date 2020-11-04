const Person = require('../models/person');
const Actvity = require('../models/activity');
const Meal = require('../models/meal');

async function addSurvey(...personInfo) {
  const person = personInfo[0];
  const meal = personInfo[1];
  const activity = personInfo[2];

  const candiidate = await Person.create({
    first_name: person.first_name,
    last_name: person.last_name,
    contact_number: person.contact_number,
    age: person.age,
  });

  await Actvity.create({
    i_like_to_eat_out: activity.i_like_to_eat_out,
    i_like_to_watch_movies: activity.i_like_to_watch_movies,
    i_like_to_watch_tv: activity.i_like_to_watch_tv,
    i_like_to_listen_to_the_radio: activity.i_like_to_listen_to_the_radio,
    PersonId: candiidate.id,
  });

  await Meal.create({
    pizza: meal.pizza,
    pasta: meal.pasta,
    pap_and_wors: meal.pap_and_wors,
    chicken_and_stir_fry: meal.chicken_and_stir_fry,
    beef_stir_fry: meal.beef_stir_fry,
    other: meal.other,
    PersonId: candiidate.id,
  });
}

module.exports = {
  addSurvey,
};
