import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayerList, fetchStats } from "../Actions/playersActions";
import Select from "react-select";

const Search = () => {
  const dispatch = useDispatch();
  const playerList = useSelector(state => state.playersReducer.playerList);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(fetchPlayerList());
  }, [dispatch]);

  const options = playerList.map(item => ({
    value: item,
    label: item
  }));

  const handleChange = e => {
    const name = e.value.replace(" ", "_");
    dispatch(fetchStats(name));
    setSelectedOption(e);
  };

  return (
    <div className="search-player" style={{ color: "#000" }}>
      <Select
        value={selectedOption}
        onChange={e => handleChange(e)}
        options={options}
      />
    </div>
  );
};

export default Search;
