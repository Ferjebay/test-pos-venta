const { response } = require('express');
const MySQL = require('../database/config');

const generarSecuencialNumerico = ( valor ) => {
  let secuencialActual = 9 - valor.toString().length;
  let resultado = '';

  for (let index = 0; index < secuencialActual; index++) resultado += '0'
  
  return `${resultado}${ valor }`
}

const generarSecuencial = async (req, res = response) => {
  const mysql = new MySQL();
  try{
      const query = `SELECT COUNT(*) + 1 as totalFacturado FROM facturas`;

      const noFactura = await mysql.ejecutarQuery( query );
      const numeroSecuencial = generarSecuencialNumerico( noFactura[0].totalFacturado )

      return numeroSecuencial;
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const getNumFactura = async (req, res = response) => {
    try{      
        const numeroSecuencial = await generarSecuencial();
        res.json({ numeroSecuencial })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const addVenta = async (req, res = response) =>{
  let { cliente_id, numComprobante, usuario_id, pv_id, detalle, totalPago } = req.body;

    cliente_id = ( cliente_id == 'CONSUMIDOR FINAL' ) ? 3 : cliente_id

    //Consultar secuencial actual de la factura en la BD
    const numSecuancial = await generarSecuencial();
    const arrayNumComprobante = numComprobante.split('-');
    numComprobante = `${ arrayNumComprobante[0] }-${ arrayNumComprobante[1] }-${numSecuancial}`;

  const mysql = new MySQL();

  try{
      const query = `INSERT INTO facturas(cliente_id, usuario_id, pv_id, num_comprobante, 
          totalIva, totalPago, fecha) 
          VALUES(${ cliente_id }, ${ usuario_id }, ${ pv_id }, '${ numComprobante }', 0.00, ${ totalPago }, NOW())`;
      await mysql.ejecutarQuery( query );

      const factura_id = await mysql.ejecutarQuery( 'SELECT id FROM facturas ORDER BY id DESC LIMIT 1' );

      let insertQueryDetalle = `INSERT INTO detalle_factura(factura_id, articulo_id, detalle, precio_venta, total_iva, total) VALUES`
        
      detalle.forEach((articulo, index) => {
        insertQueryDetalle += ` (
          ${factura_id[0].id}, 
          ${ articulo.id }, 
          '${ articulo.detalle }', 
          ${ articulo.precio_venta },
          0,
          ${ articulo.precio_venta })
          ${ ((index + 1) != detalle.length ) ? ',' : ';' }`
      });

      await mysql.ejecutarQuery( insertQueryDetalle );
      res.json({ msg: 'Venta Realizado Exitosamente' })
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const getVentas = async (req, res = response) =>{

  const mysql = new MySQL();

  try{
      const query = `SELECT f.*, c.nombres AS cliente, CONCAT(u.nombres, ' ', u.apellidos) AS usuario, 
        pv.nombre AS pv_nombre
        FROM facturas f, clientes c, usuarios u, puntos_ventas pv
        WHERE f.cliente_id = c.id AND
        f.usuario_id = u.id AND
        f.pv_id = pv.id`

      const facturas = await mysql.ejecutarQuery( query );

      res.json({ facturas })
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const anularVenta = async (req, res = response) =>{
  const mysql = new MySQL();

  try{
      const query = `UPDATE facturas SET estado = 0 WHERE id = ${ req.params.factura_id }`

      await mysql.ejecutarQuery( query );

      res.json({ msg: 'Factura Anulada Exitosamente' })
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

const detalleVenta = async (req, res = response) =>{
  const mysql = new MySQL();

  try{
      const query = `SELECT a.marca, a.modelo, a.imei, df.detalle, df.total
                  FROM detalle_factura df, articulos a
                  WHERE df.articulo_id = a.id AND
                  df.factura_id = ${ req.params.factura_id }`

      const detalleVenta = await mysql.ejecutarQuery( query );

      res.json({ detalleVenta })
  }catch (error) {
      console.log(error);
      return res.json({ msg: 'Error al consultar en la DB' })
  }
}

module.exports = {
  addVenta,
  anularVenta,
  detalleVenta,
  getNumFactura,
  getVentas
}