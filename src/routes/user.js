const express = require('express');
const User = require('../controllers/user/index');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    let users = await User.listar();
    return res.send(users);
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.post('/user', async (req, res) => {
  try {
    let user = req.body;
    console.log(user);
    await User.cadastrar(user).then(result => {
      res.send({ message: result });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.put('/user', async (req, res) => {
  try {
    let { idUser, user } = req.body;

    await User.atualizar(idUser, user).then(() => {
      res.send({ message: 'Atualizado com sucesso!' });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});

router.delete('/user', async (req, res) => {
  try {
    let  email  = req.body;

    await User.deletar(email).then(resul => {
      res.send({ message: 'Deletado com sucesso!' });
    });
  } catch {
    return res.status(400).send({ error: true });
  }
});
router.post('/login', async (req, res) => {
    try{
    let { email, senha } = req.body;
    const data = await User.login(email, senha)
    if(data){
    res.send({ message: 'Logado com sucesso!' });
    }else{
      throw 'Usuario não encotrado';
    }
    }catch{
    return res.status(401).send({ error: true });
}
});

module.exports = router;
