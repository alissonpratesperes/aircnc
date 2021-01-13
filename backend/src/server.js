const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const path = require('path');

const routes = require('./routes');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@omnistack9.pwlbv.mongodb.net/omnistack9?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true

    });



            io.on('connection', socket => {

                console.log(`Socket conectado :${ socket.id }`);

            });

                
            
                    app.use(cors());

                    app.use(express.json());

                    app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

                    app.use(routes);

                    server.listen(3333);

//req.query = Para acessar as Query Params (para filtros nas requisições);
//req.params = Para acessar as Route Params (para edição e deleção nas requisições);
//req.body = Para acessar o Corpo da Requisição (para criação e edição nas requisições);