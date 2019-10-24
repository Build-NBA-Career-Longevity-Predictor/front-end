import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import SavedPlayer from "./SavedPlayer";

const PlayerList = () => {
  const state = useSelector(state => state.playersReducer);

  const renderStats = () => {
    return (
      <div className="player-container">
        <h1>NBA Career Longevity Predictor</h1>
        <div className="top-container">
          <Search />
          <SavedPlayer />
        </div>
        <div className="expected-years">
          <h3>
            {state.currentPlayer.name} is expected to be in the NBA for &nbsp;
            <p>{Math.round(state.currentPlayer.prediction)} years.</p>
          </h3>
        </div>
        <div className="player-cards">
          <div className="searched-player">
            <h2>{state.currentPlayer.name}</h2>
            <img src={state.currentPlayer.imgurl} alt="current player"></img>
            <p>{state.currentPlayer.position}</p>
            <p>{state.currentPlayer.height.replace("-", "' ") + '"'}</p>
            <p>{state.currentPlayer.weight}</p>
            <p>College: {state.currentPlayer.college}</p>
          </div>
          <div className="stats-card">
            <div className="points">
              <p>{state.currentPlayer.pts_pg}</p>
              <h3 className="stats">POINTS PER GAME</h3>
              <p>{state.currentPlayer.similarplayers[0].pts_pg}</p>
            </div>
            <div className="assists">
              <p>{state.currentPlayer.assists_pg}</p>
              <h3 className="stats">ASSISTS PER GAME</h3>
              <p>{state.currentPlayer.similarplayers[0].assists_pg}</p>
            </div>
            <div className="rebounds">
              <p>{state.currentPlayer.rebounds_pg}</p>
              <h3 className="stats">REBOUNDS PER GAME</h3>
              <p>{state.currentPlayer.similarplayers[0].rebounds_pg}</p>
            </div>
            <div className="minutes">
              <p>{state.currentPlayer.mins_pg}</p>
              <h3 className="stats">MINUTES PER GAME</h3>
              <p>{state.currentPlayer.similarplayers[0].mins_pg}</p>
            </div>
          </div>
          <div className="similar-player">
            <h2>{state.currentPlayer.similarplayers[0].name}</h2>
            <img
              src={state.currentPlayer.similarplayers[0].imgurl}
              alt="similar player"
            ></img>
            <p>{state.currentPlayer.similarplayers[0].position}</p>
            <p>
              {state.currentPlayer.similarplayers[0].height.replace("-", "' ") +
                '"'}
            </p>
            <p>{state.currentPlayer.similarplayers[0].weight}</p>
            <p>College: {state.currentPlayer.similarplayers[0].college}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderPlaceholder = () => {
    return (
      <div className="player-container">
        <h1>NBA Career Longevity Predictor</h1>
        <div className="top-container">
          <Search />
          <SavedPlayer />
        </div>
        <div className="player-cards">
          <h2>Search for a player!</h2>
        </div>
      </div>
    );
  };

  return <>{state.currentPlayer ? renderStats() : renderPlaceholder()}</>;
};

export default PlayerList;
