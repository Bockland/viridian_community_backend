const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: String,
    password: String,
    rol: String,
    admin: Number,
    lider: Number,
    team: String,
    enable: Boolean    
});

const Usuario = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuario;