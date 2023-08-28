const { Router } = require('express');
const { crearUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuario } = require('../controllers/usuarios.controller');
const { crearJugador, obtenerJugador, eliminarJugador, actualizarJugador } = require('../controllers/jugador.controller');
const { crearEquipo, obtenerEquipo, eliminarEquipo, actualizarEquipo } = require('../controllers/team.controller');
const { crearRol, obtenerRol, eliminarRol, actualizarRol } = require('../controllers/roles.controller');

const router = Router();

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