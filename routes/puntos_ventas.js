const { Router } = require('express');
const { check } = require('express-validator');
const { puntos_ventasGet } = require('../controllers/pvController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], puntos_ventasGet); 

module.exports = router;



