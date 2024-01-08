/* eslint-disable import/extensions */
const express = require('express');
const usuarios = require('./usuarioRoute');

module.exports = (app) => {
  app.use(
    express.json(),
    usuarios,
  );
};
