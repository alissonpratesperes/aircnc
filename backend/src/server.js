const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const path = require('path');

const socketio = require('socket.io');

const http = require('http');

const routes = require('./routes');

const app = express();

const server = http.Server(app);

const io = socketio(server);

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@omnistack9.pwlbv.mongodb.net/omnistack9?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true

    });

        const connectedUsers = {};

            io.on('connection', socket => {

                console.log('conectado, mano', socket.id);

                const { user_id } = socket.handshake.query;

                    connectedUsers[ user_id ] = socket.id;

            });

                app.use(( req, res, next ) => {

                    req.io = io;

                        req.connectedUsers = connectedUsers;

                            return next();

                })
            
                    app.use(cors());

                    app.use(express.json());

                    app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

                    app.use(routes);

                    server.listen(3333);

//req.query = Para acessar as Query Params (para filtros nas requisições);
//req.params = Para acessar as Route Params (para edição e deleção nas requisições);
//req.body = Para acessar o Corpo da Requisição (para criação e edição nas requisições);