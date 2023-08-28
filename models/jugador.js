const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
    name: String,
    tier: String,
    points: Number,    
    team: String,
    idunite: String,
    primary: String,
    secundary: String,
    country: String,
    clubpokemon: String,
    email: String
});

const Jugador = mongoose.model('Jugadores', jugadorSchema);

module.exports = Jugador;