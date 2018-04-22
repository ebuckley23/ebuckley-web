const express = require('express');
const router = express.Router();
const authenticationService = require('../services/authenticate');

router.route('/')
  .post((req, res) => {
    authenticationService.login(req.body, (ret) => {
      res.json(ret);
    });
  });

router.get('/context', (req, res) => {
  res.json(req.user);
});

module.exports = router;