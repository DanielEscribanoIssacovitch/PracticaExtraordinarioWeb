const express = require('express');
const router = express.Router();
const db = require('../database/index');

// Ruta para recibir puntuaciones
router.post('/score', (req, res) => {
    const { username, password, score } = req.body;

    if (!username || !password || score === undefined) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    db.addOrUpdateUser(username, password, score);
    res.json({ message: 'Puntuación guardada correctamente' });
});

// Ruta para obtener las puntuaciones
router.get('/scores', (req, res) => {
    const users = db.getUsers();
    res.json(users);
});

// Ruta para mostrar el leaderboard en EJS
router.get('/leaderboard', (req, res) => {
    const users = db.getUsers();
    res.render('leaderboard', { users });
});

module.exports = router;
