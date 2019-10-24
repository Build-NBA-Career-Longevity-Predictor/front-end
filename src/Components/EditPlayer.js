import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import { editPlayer } from "../Actions/userActions";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "70%"
  },
  input: {
    color: "white !important",
    borderColor: "white !important"
  },
  closeIcon: {
    minWidth: "24px",
    color: "white",
    marginLeft: "10%"
  },
  doneIcon: {
    minWidth: "24px",
    color: "white",
    paddingTop: "10%"
  }
}));

const EditPlayer = props => {
  const classes = useStyles();
  const [value, setValue] = useState(props.player.name);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editPlayer(props.player.playerid, { name: value }));
    props.setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Edit Player"
        value={value}
        onChange={e => setValue(e.target.value)}
        margin="normal"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.input
        }}
        InputLabelProps={{ className: classes.input }}
      />
      <ListItemIcon
        button
        classes={{ root: classes.closeIcon }}
        onClick={() => props.setIsEditing(false)}
      >
        <Tooltip disableFocusListener disableTouchListener title="Edit">
          <CloseIcon style={{ fontSize: "24px" }} />
        </Tooltip>
      </ListItemIcon>
      <ListItemIcon
        button
        classes={{ root: classes.doneIcon }}
        onClick={handleSubmit}
      >
        <Tooltip disableFocusListener disableTouchListener title="Delete">
          <DoneIcon style={{ fontSize: "24px" }} />
        </Tooltip>
      </ListItemIcon>
    </form>
  );
};

export default EditPlayer;
