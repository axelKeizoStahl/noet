import React from "react";
import { useNavigate } from "react-router-dom";

export default function Room({ socket }) {

    const navigate = useNavigate();

    const room = (e) => {
        console.log(socket.id)
        e.preventDefault();
        var input = document.getElementById("roominput");
        if (input.value) {
            socket.emit('join', input.value);
            input.value = '';
            navigate('/chat')
        }
        
    };

    return(
        <form id="joinroom" onSubmit={room}>
            <input type="text" id="roominput"/>
            <button id="join" type="submit">Join</button>
            <button id="make" type="submit">Make a Room</button>
        </form>
    );
}