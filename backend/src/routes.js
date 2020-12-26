const express = require('express');

const routes = express.Router();

    routes.post('/users', (req, res) => {
            
        return res.json({ id: req.body });

    });

        module.exports = routes;