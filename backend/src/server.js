const express = require('express');

const app = express();

//req.query = Para acessar as Query Params (para filtros nas requisições);
//req.params = Para acessar as Route Params (para edição e deleção nas requisições);
//req.body = Para acessar o Corpo da Requisição (para criação e edição nas requisições);

    app.use(express.json());

    app.get('/users', (req, res) => {
        
        return res.json({ id: req.body });

    });

    app.listen(3333);