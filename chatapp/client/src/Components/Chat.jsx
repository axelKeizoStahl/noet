import React from "react";
import { useEffect } from "react";

export default function Chat({ socket }) {

    function sendmessage(e) {
        e.preventDefault();
        var form = document.getElementById("form");
        var input = document.getElementById("input");
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    };

    useEffect(() => {
        console.log(socket.id)
        socket.on('back message', function(msg) {
            console.log('message reecevied');
            var messages = document.getElementById("messages");
            var item = document.createElement('li');
            var message = msg.message;
            var id = msg.id;
            item.innerHTML = `<em>${id}:</em>  ${message}`;
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