const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const routes = require('./routes');
const app = express();
const server = http.Server(app);
const options = { cors: true, origins: ['*:*'] };
const io = socketio(server, options);

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack9?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

        const connectedUsers = {};

            io.on('connection', socket => {
                const { user_id } = socket.handshake.query;
                    connectedUsers[user_id] = socket.id;
            });

                app.use((request, response, next) => {
                    request.io = io;
                    request.connectedUsers = connectedUsers;
                        return next();
                });

                    app.use(cors());
                    app.use(express.json());
                    app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
                    app.use(routes);
                    
                        server.listen(3333);