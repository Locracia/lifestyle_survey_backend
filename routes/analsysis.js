const express = require('express');
const router = express.Router();
const { ageAnalysis, mealAnalysis, activityAnalysis } = require('../services/analysisService');

router.get('/age', async (req, res) => {
  const analysis = await ageAnalysis();

  res.status(200).send({ candidateAgeAnalysis: analysis });
});

router.get('/meal', async (req, res) => {
  const analysis = await mealAnalysis();

  res.status(200).send({ mealAnalysis: analysis });
});

router.get('/activity', async (req, res) => {
  const analysis = await activityAnalysis();

  res.status(200).send({ activityAnalysis: analysis });
});

module.exports = router;
