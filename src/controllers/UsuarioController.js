/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const UsuarioService = require('../services/ServiceUsuario.js');

const usuarioService = new UsuarioService();

class UsuarioController extends Controller {
  constructor() {
    super(usuarioService);
  }
}

module.exports = UsuarioController;
