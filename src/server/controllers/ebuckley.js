const express = require('express');
const router = express.Router();
const ebuckleyService = require('../services/ebuckley');

router.get('/', (req, res) => {
  ebuckleyService.getEbuckley((ebuckley) => {
    res.json(ebuckley);
  });
});

module.exports = router;