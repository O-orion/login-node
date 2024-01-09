/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable class-methods-use-this */
const dataSource = require('../models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
require('dotenv').config();

class AuthService {
  async login(dto) {
    const usuario = await dataSource['Usuario'].findOne({
      attibutes: ['email'],
      where: {
        email: dto.email,
      },
    });

    if (!usuario) {
      throw new Error('Email ou senha invalidos!');
    }

    const senhaCorreta = await compare(dto.senha, usuario.senha);

    if (!senhaCorreta) {
      throw new Error('Email ou senha invalidos!');
    }

    const payload = { email: usuario.email, id: usuario.id };
    const options = { expiresIn: 80400 };
    const signToken = sign(payload, process.env.SECRET, options);

    return { accesToken: signToken };
  }
}

module.exports = AuthService;
