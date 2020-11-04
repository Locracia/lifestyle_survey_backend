const Person = require('../models/person');
const Actvity = require('../models/activity');
const Meal = require('../models/meal');

async function ageAnalysis() {
  const candidates = await Person.findAll();

  const totalSurveys = candidates.length;

  const ageArray = candidates.map((person) => person.age);

  const youngestCandidate = Math.min(...ageArray);
  const oldestCandidate = Math.max(...ageArray);

  const combinedAgeTotal = ageArray.reduce((result, item) => {
    return result + item;
  }, 0);

  const candidateAgeAverage = parseInt(combinedAgeTotal / totalSurveys);

  return { totalSurveys, youngestCandidate, oldestCandidate, candidateAgeAverage };
}

async function mealAnalysis() {
  const meals = await Meal.findAll();

  const totalSurveys = meals.length;

  const peopleThatLikePizza = meals.filter((meal) => meal.pizza === 1).length;
  const peopleThatLikePasta = meals.filter((meal) => meal.pasta === 1).length;
  const peopleThatLikePapAndWors = meals.filter((meal) => meal.pap_and_wors === 1).length;
  const peopleThatLikeChickenAndStirFry = meals.filter((meal) => meal.chicken_and_stir_fry === 1).length;
  const peopleThatLikeBeefAndStirFry = meals.filter((meal) => meal.beef_stir_fry === 1).length;
  const peopleThatLikeOther = meals.filter((meal) => meal.other === 1).length;

  const percentageThatLikePizza = parseInt((peopleThatLikePizza / totalSurveys) * 100);
  const percentageThatLikePasta = parseInt((peopleThatLikePasta / totalSurveys) * 100);
  const percentageThatLikePapAndWors = parseInt((peopleThatLikePapAndWors / totalSurveys) * 100);
  const percentageThatLikeChickenAndStirFry = parseInt((peopleThatLikeChickenAndStirFry / totalSurveys) * 100);
  const percentageThatLikeBeefAndStirFry = parseInt((peopleThatLikeBeefAndStirFry / totalSurveys) * 100);
  const percentageThatLikeOther = parseInt((peopleThatLikeOther / totalSurveys) * 100);

  return {
    percentageThatLikePizza,
    percentageThatLikePasta,
    percentageThatLikePapAndWors,
    percentageThatLikeChickenAndStirFry,
    percentageThatLikeBeefAndStirFry,
    percentageThatLikeOther,
  };
}

async function activityAnalysis() {
  const activities = await Actvity.findAll();

  const totalSurveys = activities.length;

  const sumOfEatOutRatings = activities
    .map((activity) => activity.i_like_to_eat_out)
    .reduce((result, item) => {
      return result + item;
    }, 0);
  const sumOfWatchMoviesRatings = activities
    .map((activity) => activity.i_like_to_watch_movies)
    .reduce((result, item) => {
      return result + item;
    }, 0);
  const sumOfWatchTvRatings = activities
    .map((activity) => activity.i_like_to_watch_tv)
    .reduce((result, item) => {
      return result + item;
    }, 0);
  const sumOfListenToRadioRatings = activities
    .map((activity) => activity.i_like_to_listen_to_the_radio)
    .reduce((result, item) => {
      return result + item;
    }, 0);

  const averageEatOutRating = parseInt(sumOfEatOutRatings / totalSurveys);
  const averageWatchMoviesRating = parseInt(sumOfWatchMoviesRatings / totalSurveys);
  const averageWatchTvRating = parseInt(sumOfWatchTvRatings / totalSurveys);
  const averageListenToRadioRating = parseInt(sumOfListenToRadioRatings / totalSurveys);

  return { averageEatOutRating, averageWatchMoviesRating, averageWatchTvRating, averageListenToRadioRating };
}

module.exports = {
  ageAnalysis,
  mealAnalysis,
  activityAnalysis,
};
