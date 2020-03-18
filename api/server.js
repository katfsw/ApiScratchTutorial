const express = require('express');

const characterRouter = require('../auth/character-router.js');

const server = express();

server.use(express.json());

server.use('/api/characters', characterRouter);

server.get('/', (req, res) => {
    res.send("API is ONLINE!")
})

module.exports = server;