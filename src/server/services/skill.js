const skill = require('../models/skill');
const db = require('../database');
const error = require('../utils').Exception;

class SkillService {
   async getSkills() {
     const skills = await skill.find({});
     return skills;
   }

   async addSkill(data) {
     const result = await skill.create(data);
     return result;
   }
}

module.exports = new SkillService();