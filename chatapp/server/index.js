const mongo = require('mongodb');
const moongoose = require('mongoose');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const { addUser, getUsers, deleteUser, getUser } = require('./users');


const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

//const dbURI = "mongodb+srv://jojo:test1234@noet0.alby9bm.mongodb.net/?retryWrites=true&w=majority";
//moongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology: true})
//    .then((result) => console.log('connected to db'))
//    .catch((err) => console.log(err));





io.on('connection', (socket) => {
    console.log(`Connection from ${socket.id}`);

    socket.on('newUser', (login) => {
        var {user, error} = addUser(socket.id, login.username, login.room);


        socket.join(user.room);
        
        socket.in(user.room).emit('notification', {title: 'Someone is here', description: `${user.name} just entered the room`});
        io.in(user.room).emit('users', getUsers(user.room));
        io.in(user.room).emit('user', getUser(socket.id));
        console.log(socket.id);
        
    });


    socket.on('message', (msg) => {
        console.log('bla')
        var user = getUser(socket.id);
        console.log(socket.rooms);
        console.log(user.room)
        io.in(user.room).emit('sendMessage', {userName: user.name, message: msg});
    });

    //for development purposes:
//    socket.onAny((event, ...args)=> {
//        console.log(event, args);
//    })

    

    socket.on('disconnection', () => {
        console.log(`a disconnection`)
    });
});







server.listen(4000, () => {
    console.log('listening on *:4000');
});