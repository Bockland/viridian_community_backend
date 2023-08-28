const { Router } = require('express');
const timeout = require('connect-timeout');

const { crearUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuario } = require('../controllers/usuarios.controller');
const { crearJugador, obtenerJugador, eliminarJugador, actualizarJugador } = require('../controllers/jugador.controller');
const { crearEquipo, obtenerEquipo, eliminarEquipo, actualizarEquipo } = require('../controllers/team.controller');
const { crearRol, obtenerRol, eliminarRol, actualizarRol } = require('../controllers/roles.controller');

const router = Router();
router.use(timeout('600s'));

router.get('/test', (req, res) => {
    
    const db = (process.env.MONGO_DB) ? process.env.MONGO_DB : "No se encontro variable"
    const puerto = (process.env.PORT) ? process.env.PORT : "No se encontro puerto"

    const response = {
        db, puerto
    };

    res.send(response)
});

router.post('/user/create', crearUsuario);
router.post('/user/find', obtenerUsuario);
router.post('/user/delete', eliminarUsuario);
router.post('/user/update', actualizarUsuario);

router.post('/player/create', crearJugador);
router.post('/player/find', obtenerJugador);
router.post('/player/delete', eliminarJugador);
router.post('/player/update', actualizarJugador);

router.post('/team/create', crearEquipo);
router.post('/team/find', obtenerEquipo);
router.post('/team/delete', eliminarEquipo);
router.post('/team/update', actualizarEquipo);

router.post('/role/create', crearRol);
router.post('/role/find', obtenerRol);
router.post('/role/delete', eliminarRol);
router.post('/role/update', actualizarRol);

module.exports = router;