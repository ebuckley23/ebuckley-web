const express = require('express');
const router = express.Router();
const subscriberService = require('../services/subscriber');

router.post('/', async (req, res) => {
  const result = await subscriberService.addSubscriber(req.body);
  res.json(result);
});

module.exports = router;