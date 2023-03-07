import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(socket) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setUserName('userName', userName);
        navigate('/room')
    };
    return (
        <form id="signinForm">
            <h1>Sign in to use</h1>
            <label htmlFor="username">UserName</label>
            <input 
                type="text"
                minLength="6"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button id="signin">Sign In</button>
        </form>
    );
};