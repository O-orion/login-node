/* eslint-disable import/extensions */
const { Router } = require('express');
const AuthController = require('../controllers/AuthController.js');

const authController = new AuthController();
const router = new Router();

router.post('/auth/login', (req, res) => authController.login(req, res));

module.exports = router;
