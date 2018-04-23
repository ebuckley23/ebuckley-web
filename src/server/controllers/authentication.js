const express = require('express');
const router = express.Router();
const authenticationService = require('../services/authenticate');

router.route('/')
  .post(async (req, res) => {
    const token = await authenticationService.login(req.body);
    res.json(token);
  });

router.get('/context', (req, res) => {
  res.json(req.user);
});

module.exports = router;