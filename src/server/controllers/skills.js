const express = require('express');
const router = express.Router();
const skillService = require('../services/skill');

router.route('/')
  .get((req, res) => {
    skillService.getSkills((skills) => {
      res.json(skills);
    });
  })
  .post((req, res) => {
    skillService.addSkill(req.body, (ret) => {
      res.json(ret);
    });
  });

module.exports = router;