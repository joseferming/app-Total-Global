const express = require('express');
const router = express.Router();

const mysqlConnection = require('../databe');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM productos', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:codigo', (req, res) => {
    const { codigo } = req.params;
    mysqlConnection.query('SELECT * FROM productos WHERE codigo = ?', [codigo], (err,
    rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) =>{
    const {codigo, nombre, categoria, precio, marca, stock} = req.body;
    const query = `
        SET @codigo = ?;
        SET @nombre = ?;
        SET @categoria = ?;
        SET @precio = ?;
        SET @marca = ?;
        SET @stock = ?;
        CALL productaddoedit(@codigo, @nombre, @categoria, @precio,@marca, @stock);
    `;
    
    
    
    mysqlConnection.query(query, [codigo, nombre, categoria, precio, marca, stock], (err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Producto nuevo agregado'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;

