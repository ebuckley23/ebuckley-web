const express = require('express');
const router = express.Router();
const skillService = require('../services/skill');

router.route('/')
  .get(async (req, res) => {
    const ret = await skillService.getSkills();
    res.json(ret);
  })
  .post(async (req, res) => {
    const ret = await skillService.addSkill(req.body);
    res.json(ret);
  });

module.exports = router;