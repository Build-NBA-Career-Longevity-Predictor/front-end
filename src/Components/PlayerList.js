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
        <div className="player-cards">
          <div className="searched-player">
            <h2>{state.currentPlayer.name}</h2>
            <p>IMAGE HERE</p>
            <p>PG</p>
            <p>6'3"</p>
            <p>190lbs</p>
            <p>College: Davidson</p>
          </div>
          <div className="stats-card">
            <div className="points">
              <p>26</p>
              <h3 className="stats">POINTS PER GAME</h3>
              <p>24</p>
            </div>
            <div className="assists">
              <p>5</p>
              <h3 className="stats">ASSISTS PER GAME</h3>
              <p>2</p>
            </div>
            <div className="rebounds">
              <p>8</p>
              <h3 className="stats">REBOUNDS PER GAME</h3>
              <p>10</p>
            </div>
            <div className="minutes">
              <p>37</p>
              <h3 className="stats">MINUTES PER GAME</h3>
              <p>36</p>
            </div>
          </div>
          <div className="similar-player">
            <h2>{state.currentPlayer.similarplayers[0].name}</h2>
            <p>IMAGE HERE</p>
            <p>PG</p>
            <p>6'5"</p>
            <p>220lbs</p>
            <p>College: Arizona State</p>
          </div>
        </div>
        <div className="expected-years">
          <p>PlayerName is expected to be in the NBA for Years years.</p>
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
          <p>Search for a player!</p>
        </div>
      </div>
    );
  };

  return <>{state.currentPlayer ? renderStats() : renderPlaceholder()}</>;
};

export default PlayerList;
