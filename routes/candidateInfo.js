const express = require('express');
const router = express.Router();
const { addSurvey } = require('../services/addSurveyService');

router.post('/survey', async (req, res) => {
  const { first_name, last_name, contact_number, age, meal, activity } = req.body;

  await addSurvey({ first_name, last_name, contact_number, age }, meal, activity);

  res.status(200).send({ success: true });
});

module.exports = router;
