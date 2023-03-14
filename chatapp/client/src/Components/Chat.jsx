import React from "react";
import { useEffect, useState } from "react";

export default function Chat({ socket }) {


    function sendmessage(e) {
        e.preventDefault();
        var form = document.getElementById("form");
        var input = document.getElementById("input");
        if (input.value) {
            socket.emit('message', input.value);
            input.value = '';
        }
        console.log('hweofie')
    };

    useEffect(() => {



        socket.on('users', (users) => {
            console.log('in the room');
        });

        socket.on('sendMessage', function(msg) {
            console.log('message reecevied');
            var messages = document.getElementById("messages");
            var item = document.createElement('li');
            var message = msg.message;
            var sender = msg.userName;
            console.log(message);
            console.log(sender);
            item.innerHTML = `<em>${sender}:</em>  ${message}`;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
        });
    });

    
    return (
    <div>
        <ul id="messages"></ul>
        <form id="form" onSubmit={sendmessage}>
            <input id="input" autoComplete="off" type="text" />
            <button type="submit">Send</button>
        </form>
        
    </div>
    );
};