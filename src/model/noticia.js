const mongoose = require("../database/mongo");

const Noticia = new mongoose.Schema(
  {
    data: {
      type: String,
      trim: true,
    },
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    conteudo: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

const noticiaSchema = mongoose.model("Noticia", Noticia);

module.exports = noticiaSchema;
