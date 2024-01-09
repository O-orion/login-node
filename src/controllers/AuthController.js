/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
const AuthService = require('../services/AuthService.js');

const authService = new AuthService();

class AuthController {
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      const login = await authService.login({ email, senha });

      return res.status(200).json(login);
    } catch (error) {
      return res.status(400).json(`error: ${error} `);
    }
  }
}

module.exports = AuthController;
