import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import RegisterForm from "./components/RegisterForm";
import WaitingRoom from "./components/WaitingRoom";
import BoggleGameBoard from "./components/BoggleGameBoard";
import Header from "./components/Header";

const ENDPOINT = "http://localhost:4000";
const socket = socketIOClient(ENDPOINT);

const playStatuses = {
    PLAYING: "PLAYING",
    WAITING: "WAITING",
    COUNTING: "COUNTING",
};

function App() {
    const [playStatus, setPlayStatus] = useState(null);
    const [name, setName] = useState("");
    const [players, setPlayers] = useState({});
    const [inCurrentGame, setInCurrentGame] = useState(false);

    const registerHandler = (e) => {
        e.preventDefault();
        if (name) {
            socket.emit("register", name);
        }
    };

    const startGameHandler = (e) => {
        socket.emit("startGame");
    };

    useEffect(() => {
        socket.on("changeStatus", (status) => {
            setPlayStatus(playStatuses[status]);
        });

        socket.on("playerChange", (players) => {
            setPlayers(players);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div className="App">
            <Header />
            {!playStatus && <RegisterForm name={name} setName={setName} registerHandler={registerHandler} />}
            {playStatus === playStatuses.WAITING && (
                <WaitingRoom players={players} startGameHandler={startGameHandler}></WaitingRoom>
            )}
            {playStatus === playStatuses.PLAYING && <BoggleGameBoard></BoggleGameBoard>}
        </div>
    );
}

export default App;
