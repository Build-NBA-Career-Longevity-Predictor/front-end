import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import nbaclplogo from "../Assests/Images/nbaclplogo.png";
import { logoutUser } from "../Actions/userActions";
import Player from "./Player";
import history from "../History/history";

const useStyles = makeStyles(theme => ({
  Container: {
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
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

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const renderLoginRegister = () => {
    return (
      <List>
        <ListItem button disableGutters onClick={() => history.push("/login")}>
          <ListItemIcon classes={{ root: classes.Icon }}>
            <VpnKeyIcon style={{ fontSize: "32px" }} />
          </ListItemIcon>
          <ListItemText primary="Login" classes={{ primary: classes.Text }} />
        </ListItem>

        <ListItem
          disableGutters
          button
          onClick={() => history.push("/register")}
        >
          <ListItemIcon classes={{ root: classes.Icon }}>
            <PersonAddIcon style={{ fontSize: "32px" }} />
          </ListItemIcon>
          <ListItemText primary="Sign Up" classes={{ primary: classes.Text }} />
        </ListItem>
      </List>
    );
  };

  const renderLogout = () => {
    return (
      <List>
        <ListItem disableGutters button onClick={handleLogout}>
          <ListItemIcon classes={{ root: classes.Icon }}>
            <PowerSettingsNewIcon style={{ fontSize: "32px" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" classes={{ primary: classes.Text }} />
        </ListItem>
      </List>
    );
  };

  const renderSearch = () => {
    return (
      <List>
        <ListItem button disableGutters onClick={() => history.push("/")}>
          <ListItemIcon classes={{ root: classes.Icon }}>
            <SearchIcon style={{ fontSize: "32px" }} />
          </ListItemIcon>
          <ListItemText primary="Search" classes={{ primary: classes.Text }} />
        </ListItem>

        <ListItem button disableGutters onClick={handleClick}>
          <ListItemIcon classes={{ root: classes.Icon }}>
            <SportsBasketballIcon style={{ fontSize: "32px" }} />
          </ListItemIcon>
          <ListItemText
            primary="Saved Players"
            classes={{ primary: classes.Text }}
          />
          {open ? (
            <ExpandLess className={classes.Icon} style={{ fontSize: "32px" }} />
          ) : (
            <ExpandMore className={classes.Icon} style={{ fontSize: "32px" }} />
          )}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {state.savedPlayers.map(player => (
            <Player key={player.id} player={player} />
          ))}
        </Collapse>
      </List>
    );
  };

  return (
    <>
      <Link to="/">
        <img src={nbaclplogo} alt="logo" className={classes.logo} />
      </Link>
      <div className={classes.Container}>
        {state.userLogged ? renderSearch() : <p></p>}
        {state.userLogged ? renderLogout() : renderLoginRegister()}
      </div>
    </>
  );
}
