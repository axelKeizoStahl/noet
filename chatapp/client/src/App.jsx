import React from "react";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<Login socket={socket} />}></Route>
            <Route path="/chat" element={<Chat socket={socket} />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
