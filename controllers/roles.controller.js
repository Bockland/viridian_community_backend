const Rol = require('../models/rol')

const crearRol = async (req, res) => {
    try {

        const { rol } = req.body;

        const response = await Rol.find({"name": rol.name});
        if (response.length > 0)  return res.status(200).json({statusCode: 400, message: "Rol existente", body: rol});

        await Rol.create(rol);

        res.status(200).json({statusCode: 200, message: "Rol creado", body: rol});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const obtenerRol = async (req, res) => {
    try {
        const { query } = req.body;
        const response = await Rol.find(query);

        if(response.length == 0) return res.status(400).json( {statusCode: 400, message: "Rol no encontrado"});

        res.status(200).json({statusCode: 200, message: "Rol encontrados", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

const eliminarRol = async (req, res) => {
    try {

        const { query } = req.body;
        const response = await Rol.deleteOne(query);

        res.status(200).json({statusCode: 200, message: "Rol eliminado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

const actualizarRol = async (req, res) => {
    try {

        const { query, update } = req.body;
        const response = await Rol.updateOne(query, update);

        res.status(200).json({statusCode: 200, message: "Rol actualizado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error});
    }
}

module.exports = { crearRol, obtenerRol, eliminarRol, actualizarRol } 