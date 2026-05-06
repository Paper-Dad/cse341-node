const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.benRoute);
routes.get('/owen', lesson1controller.owenRoute);
routes.get('/scarlett', lesson1controller.scarlettRoute);

module.exports = routes;