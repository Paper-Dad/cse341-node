const router = require('express').Router();
const professionalController = require('../controllers/professional');

router.get('/', professionalController.getProfessionalData);

module.exports = router;