const Team = require('../models/team')


const crearEquipo = async (req, res) => {
    try {

        const { equipo } = req.body;

        const response = await Team.find({"name": equipo.name});
        if (response.length > 0)  return res.status(200).json({statusCode: 400, message: "Equipo existente", body: equipo});

        await Team.create(equipo);

        res.status(200).json({statusCode: 200, message: "Equipo creado", body: equipo});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

const obtenerEquipo = async (req, res) => {
    try {
        const { query } = req.body;
        const response = await Team.find(query);

        if(response.length == 0) return res.status(400).json( {statusCode: 400, message: "Equipo no encontrado"});

        res.status(200).json({statusCode: 200, message: "Equipo encontrados", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

const eliminarEquipo = async (req, res) => {
    try {

        const { query } = req.body;
        const response = await Team.deleteOne(query);

        res.status(200).json({statusCode: 200, message: "Equipo eliminado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

const actualizarEquipo = async (req, res) => {
    try {

        const { query, update } = req.body;
        const response = await Team.updateOne(query, update);

        res.status(200).json({statusCode: 200, message: "Equipo actualizado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

module.exports = { actualizarEquipo, eliminarEquipo, obtenerEquipo, crearEquipo }