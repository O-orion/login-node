// eslint-disable-next-line import/extensions
const app = require('./src/app.js');

const PORT = 8800;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
