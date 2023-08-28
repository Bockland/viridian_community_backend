const Jugador = require('../models/jugador')
const { connectToDb } = require('../functions/mongo.connection');

const crearJugador = async (req, res) => {
    try {

        await connectToDb();

        const { jugador } = req.body;

        const response = await Jugador.find({"name": jugador.name});
        if (response.length > 0)  return res.status(200).json({statusCode: 400, message: "Jugador existente", body: jugador});

        await Jugador.create(jugador);

        res.status(200).json({statusCode: 200, message: "Jugador creado", body: jugador});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const obtenerJugador = async (req, res) => {
    try {

        await connectToDb()
        .then(() => console.log("BD connect"))
        .catch((error) => res.status(400).json( {statusCode: 400, message: error.message} ));
        
        const { query } = req.body;
        const response = await Jugador.find(query);

        if(response.length == 0) return res.status(400).json( {statusCode: 400, message: "Jugador no encontrado"});

        res.status(200).json({statusCode: 200, message: "Jugador encontrados", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const eliminarJugador = async (req, res) => {
    try {

        const { query } = req.body;
        const response = await Jugador.deleteOne(query);

        res.status(200).json({statusCode: 200, message: "Jugador eliminado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const actualizarJugador = async (req, res) => {
    try {

        const { query, update } = req.body;
        const response = await Jugador.updateOne(query, update);

        res.status(200).json({statusCode: 200, message: "Jugador actualizado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

module.exports = { crearJugador, obtenerJugador, eliminarJugador, actualizarJugador }