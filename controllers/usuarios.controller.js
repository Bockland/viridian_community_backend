const Usuario = require('../models/usuario')

const crearUsuario = async (req, res) => {
    try {

        const { usuario } = req.body;

        const response = await Usuario.find({"name": usuario.name});
        if (response.length > 0)  return res.status(200).json({statusCode: 400, message: "Usuario existente", body: usuario});

        await Usuario.create(usuario);

        res.status(200).json({statusCode: 200, message: "Usuario creado", body: usuario});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const obtenerUsuario = async (req, res) => {
    try {
        console.log("Obtener...")
        const { query } = req.body;
        const response = await Usuario.find(query);

        if(response.length == 0) return res.status(400).json( {statusCode: 400, message: "Usuario no encontrado"});

        res.status(200).json({statusCode: 200, message: "Usuarios encontrados", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const eliminarUsuario = async (req, res) => {
    try {

        const { query } = req.body;
        const response = await Usuario.deleteOne(query);

        res.status(200).json({statusCode: 200, message: "Usuario eliminado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}

const actualizarUsuario = async (req, res) => {
    try {

        const { query, update } = req.body;
        const response = await Usuario.updateOne(query, update);

        res.status(200).json({statusCode: 200, message: "Usuario actualizado", body: response});
        
    } catch (error) {
        res.status(400).json( {statusCode: 400, message: error.message});
    }
}


module.exports = { crearUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuario }