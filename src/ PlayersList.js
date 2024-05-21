import React from "react";
import Player from "./player";
import AllPlayers  from "./players";
import './index.css';
const PlayersList = () => {
return (
    <div className="allPlayer">
        {AllPlayers.map((player) => (
            <Player
                key={player.name}
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                age={player.age}
                Image={player.Image}
            />
        ))}
    </div>
);
};

export default PlayersList;
