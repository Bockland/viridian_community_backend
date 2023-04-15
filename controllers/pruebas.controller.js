const Jugador = require('../models/jugador');


const pruebaconcepto = async (req, res) =>{
    const { value } = req.body;   

    const response = await Jugador.find();

    res.status(200).json({ response });
}

module.exports = { pruebaconcepto }