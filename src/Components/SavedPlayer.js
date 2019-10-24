import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { savePlayer, fetchSavedPlayers } from "../Actions/userActions";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(theme => ({
  Button: {
    width: "20%",
    height: "auto",
    margin: "0 auto",
    fontSize: "18px",
    backgroundColor: "#17408B",
    color: "white",
    fontFamily: "Lato, sans-serif"
  }
}));

const SavedPlayer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const currentPlayer = useSelector(
    state => state.playersReducer.currentPlayer
  );
  const savedPlayers = useSelector(state => state.userReducer.savedPlayers);

  useEffect(() => {
    dispatch(fetchSavedPlayers());
  }, [dispatch]);

  const handleClick = () => {
    const samePlayer = savedPlayers.filter(
      player => player.name === currentPlayer.name
    ).length;

    if (samePlayer > 0) {
      enqueueSnackbar(`${currentPlayer.name} is already saved in your list.`, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      });
    } else {
      dispatch(savePlayer(currentPlayer));
    }
  };

  return (
    <Button
      variant="contained"
      className={classes.Button}
      onClick={handleClick}
      disabled={!currentPlayer}
    >
      Save Player
    </Button>
  );
};

export default SavedPlayer;
