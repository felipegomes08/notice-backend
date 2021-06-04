const mongoose = require('mongoose');
const User = require('../../model/user');

async function listar() {
  return await User.find({});
}

async function buscar(idUser) {
  const usuario = await User.findById(idUser);

  if (!usuario) {
    return false;
  } else {
    return usuario;
  }
}


async function login(email, senha) {
    const usuario = await User.findOne({email, senha});
    console.log(usuario);
    if (!usuario) {
      return false;
    } else {
      return true;
    }
  }

async function cadastrar(user) {
  let persistedUser = await User.create(user).catch(r => {
    console.log(r);
  });
  if (persistedUser) {
    return 'Cadastrado com sucesso!';
  } else {
    return 'Ocorreu um erro ao cadastrar';
  }
}

async function atualizar(idUser, user) {
  const existe = await buscar(idUser);

  if (existe) {
    return await User.findOneAndUpdate({ _id: idUser }, user);
  } else {
    return 'Erro ao atualizar';
  }
}

async function deletar(email) {
  const existe = await buscar(email);

  if (existe) {
    return await User.findOneAndDelete({ email });
  } else {
    return 'Ocorreu um erro ao deletar usuario.';
  }
}

module.exports = { listar, buscar, cadastrar, atualizar, deletar, login };
