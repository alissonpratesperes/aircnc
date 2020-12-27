const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const path = require('path');

const routes = require('./routes');

const app = express();

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@omnistack9.pwlbv.mongodb.net/omnistack9?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true

    });

//req.query = Para acessar as Query Params (para filtros nas requisições);
//req.params = Para acessar as Route Params (para edição e deleção nas requisições);
//req.body = Para acessar o Corpo da Requisição (para criação e edição nas requisições);

        app.use(cors());

        app.use(express.json());

        app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

        app.use(routes);

        app.listen(3333);