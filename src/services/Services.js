/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
const dataSource = require('../models');

class Service {
  constructor(nomeDoModelo) {
    this.nomeModelo = nomeDoModelo;
  }

  async getAll() {
    return dataSource[this.nomeModelo].findAll();
  }

  async getUserById(id) {
    return dataSource[this.nomeModelo].findByPk(id);
  }

  async createUser(dadosUser) {
    const dados = dataSource[this.nomeModelo].create(dadosUser);
    return dados;
  }

  async update(dadosAtualizados, id) {
    const registroAtualizado = dataSource[this.nomeModelo].update(dadosAtualizados, {
      where: {
        id: id,
      },
    });

    if (registroAtualizado[0] === 0) {
      return false;
    }

    return true;
  }

  async delete(id) {
    return dataSource[this.nomeModelo].destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = Service;
