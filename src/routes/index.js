/* eslint-disable import/extensions */
const express = require('express');
const usuarios = require('./usuarioRoute');
const auth = require('./authRoute');

module.exports = (app) => {
  app.use(
    express.json(),
    auth,
    usuarios,
  );
};
