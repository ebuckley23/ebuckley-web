const skill = require('../models/skill');
const db = require('../database');
const error = require('../utils').Exception;

class SkillService {
   getSkills(result) {
     skill.find({}, function(err, skills) {
       if (err) throw err;
       result(skills);
     });
   }

   addSkill(data, result) {
     skill.create(data)
      .then(res => result(res))
      .catch(err => result(err));
   }
}

module.exports = new SkillService();