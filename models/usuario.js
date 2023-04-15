const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: String,
    password: String,
    enable: Boolean    
});

const Usuario = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuario;