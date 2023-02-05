const { Router } = require('express');
const { check } = require('express-validator');
const { proveedoresGet } = require('../controllers/proveedorController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], proveedoresGet); 

module.exports = router;



