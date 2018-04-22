const express = require('express');
const router = express.Router();
const ebuckleyService = require('../services/ebuckley');
const subscriberService = require('../services/subscriber');

router.post('/createEbuckley', (req, res) => {
  ebuckleyService.createEbuckley(req.body, (ret) => {
    res.json(ret);
  });
});

router.get('/subscribers', (req, res) => {
  subscriberService.getSubscribers((ret) => {
    res.json(ret);
  });
});

module.exports = router;