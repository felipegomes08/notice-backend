const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const server = express();

mongoose.connect('mongodb+srv://admin:news@21@noticias.t2n4y.mongodb.net/noticias?retryWrites=true&w=majority', {
   useNewUrlParser: true,
});

server.use(express.json());
server.use(routes);

server.listen(5555);