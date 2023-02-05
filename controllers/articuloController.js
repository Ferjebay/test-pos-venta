const { response } = require('express');
const MySQL = require('../database/config');

const contarArticulos = async (req, res = response) =>{
  const { desde, hasta, proveedor_id } = req.body;

  const mysql = new MySQL();
  try{
    let articulosContados = null;
    if (proveedor_id != '') {
      let query = `SELECT COUNT(a1.id) AS total, 
      (SELECT COUNT(a2.id) FROM articulos a2 WHERE a2.estado = 0`

      if (desde != '' && hasta != '') 
        query += ` AND a2.fecha_creacion BETWEEN '${ desde }' AND '${ hasta }'`
      
        query += ` AND a2.proveedor_id = ${ proveedor_id }) AS vendidos,
      (SELECT COUNT(a3.id) FROM articulos a3 WHERE a3.estado = 1` 
      
      if (desde != '' && hasta != '') 
        query += ` AND a3.fecha_creacion BETWEEN '${ desde }' AND '${ hasta }'`

        query += ` AND a3.proveedor_id = ${ proveedor_id }) AS en_stock
        FROM articulos a1 WHERE`  
      
      if (desde != '' && hasta != '') 
        query += ` a1.fecha_creacion  BETWEEN '${ desde }' AND '${ hasta }' AND`  

        query += ` a1.proveedor_id = ${ proveedor_id }`;      
      
        articulosContados = await mysql.ejecutarQuery( query );
    }
      
      const articulos = await getListArticulos( desde, hasta, proveedor_id );
      res.json({ articulosContados, articulos });        
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const getListArticulos = async(desde = '', hasta = '', proveedor_id = '', pv_id = '') => {
  const mysql = new MySQL();

  try{
      let query = `SELECT a.*, p.razon_social
          FROM articulos a, proveedores p
          WHERE a.proveedor_id = p.id`;

        if (proveedor_id != '') 
          query += ` AND p.id = ${ proveedor_id } `
        
        if (desde != '' && hasta != '') 
          query += ` AND a.fecha_creacion BETWEEN '${ desde }' AND '${ hasta }'`
      
        query += ` ORDER BY a.id DESC`;

      const articulos = await mysql.ejecutarQuery( query );
      return articulos;
  }catch (error) {
      console.log(error);
  }
}

const articulosGet = async (req, res = response) =>{
  const mysql = new MySQL();

  try{
      const query = `SELECT a.*, p.razon_social
                    FROM articulos a, proveedores p
                    WHERE a.proveedor_id = p.id ORDER BY a.id DESC`;

      const articulos = await mysql.ejecutarQuery( query );
              
      res.json({ articulos })        
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const articuloPost = async (req, res = response) =>{
  const { marca, modelo, proveedor_id, precio_base, detalles } = req.body;
  const mysql = new MySQL();

  try {
      let query = 'INSERT INTO articulos(proveedor_id, marca, modelo, precio_base, imei, color, fecha_creacion) VALUES'
      detalles.forEach((detalle, index) => {
        //Verificar si el correo existe
        query += ` ( 
            ${ proveedor_id }, 
            '${ marca }', 
            '${ modelo }', 
            ${ precio_base }, 
            '${ detalle.imei }', 
            '${ detalle.color }', 
            NOW())
            ${ ((index + 1) != detalles.length ) ? ',' : ';' }`;
      });

      await mysql.ejecutarQuery( query );
              
      res.json({ msg: "articulos agregado exitosamente" })        
  } catch (error) {
      console.log(error);
      return res.json({
          msg: 'Error, no se logro guardar al usuario'
      })
  }
}

const articulosDelete = async (req, res = response) =>{
  const mysql = new MySQL();
  const { articulo_id } = req.params;

  try{
      const query = `DELETE FROM articulos WHERE id = ${ articulo_id }`;

      await mysql.ejecutarQuery( query );
              
      res.json({ msg: 'Articulo eliminado exitosamente' })        
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const articuloPut = async (req, res = response) => {
  const { proveedor_id, marca, modelo, precio_base, imei, color } = req.body;
  const mysql = new MySQL();
  
  try {
      let query = `UPDATE articulos SET 
          proveedor_id  = ${ proveedor_id },
          marca         = '${ marca.toUpperCase() }',
          modelo        = '${ modelo.toUpperCase() }',
          precio_base   = ${ precio_base },
          imei          = '${ imei }',
          color         = '${ color }' 
          WHERE id = ${ req.params.articulo_id }`;

      await mysql.ejecutarQuery( query );
              
      res.json({ msg: "Articulo actualizado exitosamente" })        
  }catch (error){
      return res.json({ msg: error.sqlMessage })
  }
}

const getArticuloByIMEI = async (req, res = response) =>{
  const mysql = new MySQL();
  const articulo_imei = req.params.articulo_imei;
  try{
      const query = `SELECT * FROM articulos a 
                    WHERE imei = '${ articulo_imei }'`;

      const articulo = await mysql.ejecutarQuery( query );
      res.json({ articulo })        
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

module.exports = {
  articuloPut,
  articuloPost,
  articulosGet,
  articulosDelete,
  contarArticulos,
  getArticuloByIMEI
}