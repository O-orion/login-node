const { verify, decode } = require('jsonwebtoken');
require('dotenv').config();

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  // esse token é passado através da requisição.
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Operação não foi autorizada!');
  }

  // quebra a string é pegando apenas o token;
  const [, accessToken] = token.split(' ');

  try {
    // verificando se o token possui nosso secret e verificar se o token está dentro do prazo
    // se não tiver ele dá uma excessão
    verify(accessToken, process.env.SECRET);

    // pegando o payload do token fornecido
    const { id, email } = await decode(accessToken);

    req.usuarioID = id;
    req.usuarioEmail = email;

    return next();
  } catch (error) {
    res.status(401).send('Operação não foi autorizada!');
  }
};
