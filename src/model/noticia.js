const { Schema, model } = require('mongoose');

const NoticiaSchema = new Schema({
    user: {
        type: String,
    },

}, {
    timestamps: true,
});

module.exports = model('Noticia', NoticiaSchema);