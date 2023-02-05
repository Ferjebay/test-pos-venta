const { Router } = require('express');
const { check } = require('express-validator');

const { 
  articuloPost, 
  articulosGet, 
  articulosDelete, 
  articuloPut, 
  getArticuloByIMEI, 
  contarArticulos } = require('../controllers/articuloController');
const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], articulosGet); 

router.post('/', [
  validarJWT,
  validarCampos,
], articuloPost); 

router.post('/contarArticulos', [
  validarJWT,
  validarCampos,
], contarArticulos); 

router.put('/:articulo_id', [
  validarJWT,
  validarCampos,
], articuloPut); 

router.delete('/:articulo_id', [
  validarJWT,  
  validarCampos
], articulosDelete); 

router.get('/:articulo_imei', [
  validarJWT,  
  validarCampos
], getArticuloByIMEI); 

module.exports = router;



