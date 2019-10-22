import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
    return (
        <Button
            type="submit"
            variant="contained"
            className={classes.Button}
          >
            Save Player
          </Button>
    )
}

export default SavedPlayer;