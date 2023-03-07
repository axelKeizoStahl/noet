import React from "react";

export default function Room(socket) {

    const room = (e) => {
        e.preventDefault();
        var input = document.getElementById("roominput");
        socket.emit('join', input.value);
        input.value = '';
    };

    return(
        <form id="joinroom" onSubmit={room}>
            <input type="text" id="roominput"/>
            <button id="join" type="submit">Join</button>
            <button id="make" type="submit">Make a Room</button>
        </form>
    );
}