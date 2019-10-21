import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchPlayerList, searchPlayer } from "../actions"; //importing actions to populate react-select and to search player
import Select from "react-select";

const Search = () => {
  const dispatch = useDispatch();
  //const playerList = useSelector(state => state.playerList) //grab playerlist from our global state
  const playerList = ["Michael Jordan", "LeBron James", "Kobe Bryant"];

  const [selectedOption, setSelectedOption] = useState(null);

  //Get player list when component renders
  // useEffect(() => {
  //   dispatch(fetchPlayerList());
  // }, [dispatch]);

  //Once player selects a player go to DS backend to get stats
  // useEffect(() => {
  //   if (playerList && selectedOption) {

  // }, [selectedOption, playerList, dispatch]);

  const options = playerList.map(item => ({
    value: item,
    label: item
  }));

  const handleChange = e => {
    setSelectedOption(e);
  };

  return (
    <div style={{ color: "#000" }}>
      <Select
        value={selectedOption}
        onChange={e => handleChange(e)}
        options={options}
      />
    </div>
  );
};

export default Search;
