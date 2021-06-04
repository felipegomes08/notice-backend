const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const noticia = require('./routes/noticia');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(noticia);
app.use(user);

app.listen(process.env.PORT || 5555);