const { Router } = require('express');
const { crearUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuario } = require('../controllers/usuarios.controller');

const router = Router();

router.post('/user/create', crearUsuario);
router.post('/user/find', obtenerUsuario);
router.post('/user/delete', eliminarUsuario);
router.post('/user/update', actualizarUsuario);

module.exports = router;