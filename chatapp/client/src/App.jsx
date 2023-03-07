import React from "react";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import Room from "./Components/room";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/" element={<Home socket={socket} />}></Route>
            <Route path="/chat" element={<Chat socket={socket} />}></Route>
            <Route path="/room" element={<Room socket={socket} />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
