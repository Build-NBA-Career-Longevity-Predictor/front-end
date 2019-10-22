import React from "react";

const PlayerList = () => {
  //Map over saved playerlist state and return a Player component for each player
  return (
    <div className='player-container'>
      <div className='player-cards'>
        <div className='searched-player'>
          <h2>Stephen Curry</h2>
          <p>IMAGE HERE</p>
          <p>PG</p>
          <p>6'3"</p>
          <p>190lbs</p>
          <p>College: Davidson</p>
        </div>
        <div className='stats-card'>
          <h3>Points</h3>
          <h3>Assists</h3>
          <h3>Rebounds</h3>
          <h3>Minutes Per Game</h3>
        </div>
        <div className='similar-player'>
          <h2>James Harden</h2>
          <p>IMAGE HERE</p>
          <p>PG</p>
          <p>6'5"</p>
          <p>220lbs</p>
          <p>College: Arizona State</p>
        </div>
      </div>
      <div className='expected-years'>
        <p>PlayerName is expected to be in the NBA for Years years.</p>
      </div>
    </div>
  )
};

export default PlayerList;
