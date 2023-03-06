import React from "react";
import Chat from "./Components/Chat";
import socketIO from 'socket.io-client';

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <div>
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
