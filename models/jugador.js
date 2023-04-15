const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
    name: String    
});

const Jugador = mongoose.model('Jugadores', jugadorSchema);

module.exports = Jugador;