import React from "react";

const PlayerList = () => {
  //Map over saved playerlist state and return a Player component for each player
  return (
    <div className='player-container'>
      <div className='player-cards'>
        <div className='searched-player'></div>
        <div className='stats-card'></div>
        <div className='similar-player'></div>
      </div>
      <div className='expected-years'></div>
    </div>
  )
};

export default PlayerList;
