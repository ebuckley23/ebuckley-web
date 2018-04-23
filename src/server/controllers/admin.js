const express = require('express');
const router = express.Router();
const ebuckleyService = require('../services/ebuckley');
const subscriberService = require('../services/subscriber');

router.post('/createEbuckley', async (req, res) => {
  const ret = await ebuckleyService.createEbuckley(req.body);
  res.json(ret);
});

router.get('/subscribers', async (req, res) => {
  const ret = await subscriberService.getSubscribers();
  res.json(ret);
});

module.exports = router;