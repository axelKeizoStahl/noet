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
    console.log('listening on *:3000');
});