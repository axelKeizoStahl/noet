import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ socket }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //localStorage.setUserName('userName', userName);
        socket.emit('newUser', ({name, room}));
        navigate('/chat')
        console.log(socket.id)
    };
    return (
        <form id="signinForm" onSubmit={handleSubmit}>
            <h1>Sign in to use</h1>
            <label htmlFor="username">UserName</label>
            <input 
                type="text"
                minLength="6"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="username">Chat Room</label>
            <input 
                type="text"
                minLength="6"
                id="chatroom"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button id="signin" type="submit">Sign In</button>
        </form>
    );
};