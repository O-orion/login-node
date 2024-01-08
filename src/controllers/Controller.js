/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAll();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      return res.status(500).json({ error: 'ocorreu um error' });
    }
  }

  async getUserById(req, res) {
    const { userID } = req.body;

    try {
      const usuario = await this.entidadeService.getUserById(Number(1));
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json({ error: 'ocorreu um error' });
    }
  }

  async createUser(req, res) {
    const dadosUser = req.body;
    console.log(dadosUser);

    try {
      const novoUser = await this.entidadeService.createUser(dadosUser);
      return res.status(200).json(novoUser);
    } catch (error) {
      return res.status(403).json({ error: 'ocorreu um erro ao cria usuário' });
    }
  }

  async update(req, res) {
    const { idUsuario } = req.body;
    const dadosAtualizados = req.body;

    try {
      const isUpdate = await this.entidadeService.update(dadosAtualizados, Number(1));

      if (!isUpdate) {
        return res.status(400).json({ error: 'Erro ao atualizar registro ' });
      }

      return res.status(200).json({ sucesso: 'Registro atualizado com sucesso!' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'ocorreu um error' });
    }
  }

  async delete(req, res) {
    const userID = req.body;
    try {
      await this.entidadeService.delete(Number(userID));
      return res.status(200).jspn({ mensagem: 'Usuário exlcuido!' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
