/* eslint-disable no-param-reassign */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const UsuarioService = require('../services/ServiceUsuario.js');
const bcrypt = require('bcrypt');

const usuarioService = new UsuarioService();

class UsuarioController extends Controller {
  constructor() {
    super(usuarioService);
  }

  async createUser(req, res) {
    const dadosUser = req.body;

    try {
      const senhaHash = await bcrypt.hash(dadosUser.senha, 10);

      dadosUser.senha = senhaHash;

      const novoUser = await this.entidadeService.createUser(dadosUser);
      return res.status(200).json(novoUser);
    } catch (error) {
      return res.status(403).json({ error: `ocorreu um erro ao cria usuário: ${error}` });
    }
  }
}

module.exports = UsuarioController;
