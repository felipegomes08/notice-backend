const mongoose = require('mongoose');
const Noticia = require('../../model/noticia');

async function listar() {
  return await Noticia.find({});
}

async function buscar(idNoticia) {
  const usuario = await Noticia.findById(idNoticia);

  if (!usuario) {
    return false;
  } else {
    return usuario;
  }
}

async function cadastrar(noticia) {
  let persistedNoticia = await Noticia.create(noticia).catch(r => {
    console.log(r);
  });
  if (persistedNoticia) {
    return 'Cadastrado com sucesso!';
  } else {
    return 'Ocorreu um erro ao cadastrar';
  }
}

async function atualizar(idNoticia, noticia) {
  const existe = await buscar(idNoticia);

  if (existe) {
    return await Noticia.findOneAndUpdate({ _id: idNoticia }, noticia);
  } else {
    return 'Erro ao atualizar';
  }
}

async function deletar(idNoticia) {
  const existe = await buscar(idNoticia);

  if (existe) {
    return await Noticia.findOneAndDelete({ _id: idNoticia });
  } else {
    return 'Ocorreu um erro ao deletar noticia.';
  }
}

module.exports = { listar, buscar, cadastrar, atualizar, deletar };
