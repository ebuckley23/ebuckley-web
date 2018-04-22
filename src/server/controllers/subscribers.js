const express = require('express');
const router = express.Router();
const subscriberService = require('../services/subscriber');

router.get('/', (req, res) => {
  subscriberService.getSubscribers((ret) => {
    res.json(ret);
  });
});

router.post('/', (req, res) => {
  subscriberService.addSubscriber(req.body, (ret) => {
    res.json(ret);
  });
});

module.exports = router;