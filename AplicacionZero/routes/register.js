const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('register');
});

router.post('/', function(req, res) {
    const {name, email, password} = req.body;
    console.log(req.body);
    res.send('Datos recibidos');
    try{
        if(!name || !email || !password){
            throw new Error('Faltan datos');
        }
        res.send('Datos recibidos');
    } catch (error){
        res.status(400).send(error.message);
    }
});

module.exports = router;