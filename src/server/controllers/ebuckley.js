const express = require('express');
const router = express.Router();
const ebuckleyService = require('../services/ebuckley');

router.get('/', async (req, res) => {
  const ebuckley = await ebuckleyService.getEbuckley();
  res.json(ebuckley);
});

module.exports = router;