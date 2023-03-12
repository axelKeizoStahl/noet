import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ socket }) {
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        var login;
        //localStorage.setUserName('userName', userName);
        socket.emit('newUser', login = {
            username: document.getElementById("username").value,
            room: document.getElementById("chatroom").value
        });
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
            />
            <label htmlFor="username">Chat Room</label>
            <input 
                type="text"
                minLength="6"
                id="chatroom"
            />
            <button id="signin" type="submit">Sign In</button>
        </form>
    );
};