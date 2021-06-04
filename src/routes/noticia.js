const express = require('express');
const Noticia = require('../controllers/noticia/index');

const router = express.Router();

router.get('/noticias', async (req, res) => {
  try {
    let noticias = await Noticia.listar();
    return res.send(noticias);
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.post('/noticia', async (req, res) => {
  try {
    let noticia = req.body;
    console.log(noticia);
    await Noticia.cadastrar(noticia).then(result => {
      res.send({ message: result });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.put('/noticia', async (req, res) => {
  try {
    let { idNoticia, noticia } = req.body;

    await Noticia.atualizar(idNoticia, noticia).then(() => {
      res.send({ message: 'Atualizado com sucesso!' });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.delete('/noticia', async (req, res) => {
  try {
    let { idNoticia } = req.body;

    await Noticia.deletar(idNoticia).then(resul => {
      res.send({ message: 'Deletado com sucesso!' });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});


module.exports = router;
