const { response } = require('express');
const MySQL = require('../database/config');

const puntos_ventasGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        const query = `SELECT id, nombre FROM puntos_ventas`;

        const puntos_ventas = await mysql.ejecutarQuery( query );
                
        res.json({ puntos_ventas })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

module.exports = {
  puntos_ventasGet
}