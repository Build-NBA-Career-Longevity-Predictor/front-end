import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  Container: {
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
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
  },
  logo: {
    width: "100px",
    height: "100px",
    paddingTop: "20px",
    display: "block",
    margin: "0 auto"
  },
  Icon: {
    minWidth: "42px",
    color: "white",
    paddingLeft: "5px"
  },
  Text: {
    color: "white",
    fontSize: "24px",
    fontFamily: "Lato, sans-serif"
  }
}));

const Player = props => {
  //Player component that displays all the juicy data

  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem disableGutters button className={classes.nested}>
          <ListItemText
            primary={props.player}
            classes={{ primary: classes.nestedText }}
          />
          <button
            style={{
              background: "transparent",
              border: "none"
            }}
          >
            <ListItemIcon classes={{ root: classes.editIcon }}>
              <Tooltip disableFocusListener disableTouchListener title="Edit">
                <EditIcon style={{ fontSize: "24px" }} />
              </Tooltip>
            </ListItemIcon>
          </button>
          <button
            style={{
              background: "transparent",
              border: "none"
            }}
          >
            <ListItemIcon classes={{ root: classes.deleteIcon }}>
              <Tooltip disableFocusListener disableTouchListener title="Delete">
                <DeleteIcon style={{ fontSize: "24px" }} />
              </Tooltip>
            </ListItemIcon>
          </button>
        </ListItem>
      </List>
    </div>
  );
};

export default Player;
