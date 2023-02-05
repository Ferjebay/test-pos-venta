const { Router } = require('express');
const { check } = require('express-validator');
const { getClientes } = require('../controllers/clienteController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], getClientes); 

module.exports = router;



