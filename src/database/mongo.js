const mongoose = require('mongoose');

const uri =
  'mongodb+srv://admin:news@21@noticias.t2n4y.mongodb.net/noticia?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log('Conected to mongoDB');
  })
  .catch(() => {
    console.log('Error to conected to mongoDB');
  });

module.exports = mongoose;
