import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { deletePlayer } from "../Actions/userActions";
import { fetchPlayer } from "../Actions/playersActions";
import EditPlayer from "./EditPlayer";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(2)
  },
  nestedText: {
    color: "white",
    fontSize: "18px",
    fontFamily: "Lato, sans-serif"
  },
  editIcon: {
    minWidth: "24px",
    color: "white",
    marginRight: "5px"
  },
  deleteIcon: {
    minWidth: "24px",
    color: "white"
  }
}));

const Player = ({ player }) => {
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchPlayer(player.playerid));
  };

  const handleEdit = e => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleDelete = e => {
    e.stopPropagation();
    dispatch(deletePlayer(player.playerid));
  };

  const renderPlayer = () => {
    return (
      <List>
        <ListItem
          disableGutters
          button
          className={classes.nested}
          onClick={handleClick}
        >
          <ListItemText
            primary={player.name}
            classes={{ primary: classes.nestedText }}
          />
          <ListItemIcon
            classes={{ root: classes.editIcon }}
            onClick={handleEdit}
          >
            <Tooltip disableFocusListener disableTouchListener title="Edit">
              <EditIcon style={{ fontSize: "24px" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemIcon
            classes={{ root: classes.deleteIcon }}
            onClick={handleDelete}
          >
            <Tooltip disableFocusListener disableTouchListener title="Delete">
              <DeleteIcon style={{ fontSize: "24px" }} />
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      </List>
    );
  };

  return (
    <>
      {isEditing ? (
        <EditPlayer player={player} setIsEditing={setIsEditing} />
      ) : (
        renderPlayer()
      )}
    </>
  );
};

export default Player;
