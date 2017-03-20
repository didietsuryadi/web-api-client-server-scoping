var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controller')
/* GET users listing. */
router.get('/skills', controllers.getSkills);

router.get('/meals', controllers.getMeals)

module.exports = router;
