const { response } = require('express');
const MySQL = require('../database/config');

const proveedoresGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        const query = `SELECT id, razon_social FROM proveedores`;

        const proveedores = await mysql.ejecutarQuery( query );
                
        res.json({ proveedores })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

module.exports = {
  proveedoresGet
}