const { response } = require('express');
const MySQL = require('../database/config');

const getClientes = async (req, res = response) =>{
    const mysql = new MySQL();
    try{
        const query = `SELECT * FROM clientes WHERE estado = 1`;

        const clientes = await mysql.ejecutarQuery( query );

        res.json({ clientes })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

module.exports = {
  getClientes
}