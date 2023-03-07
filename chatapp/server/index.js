const mongo = require('mongodb');
const moongoose = require('mongoose');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const dbURI = "mongodb+srv://jojo:test1234@noet0.alby9bm.mongodb.net/?retryWrites=true&w=majority";
moongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

io.on('connection', (socket) => {
    console.log(`Connection from ${socket.id}`);
    socket.on('chat message', (msg) => {
        io.emit('back message', {
            message: msg,
            id: socket.id
        });
    });
    socket.on('disconnection', () => {
        console.log(`a disconnection`)
    });
});


server.listen(4000, () => {
    console.log('listening on *:4000');
});