import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "18%",
    height: "80vh",
    maxHeight: "100%",
    backgroundColor: theme.palette.background.paper,
    // border: "4px solid #17408B",
    fontSize: "14px",
    fontFamily: "Lato"
  },
  nested: {
    paddingLeft: theme.spacing(3)
  },
  logo: {
    width: "100px",
    height: "100px",
    paddingLeft: "5%"
    //  padding: "0",
    //  margin: "0"
  },
  test: {
    padding: "0",
    margin: "0"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <img
        src="https://cdn1.iconfinder.com/data/icons/sports-illustrated/100/sports_2_basketball-512.png"
        alt="logo"
        className={classes.logo}
      />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button disableGutters innerDivStyle={{ paddingLeft: 0 }}>
          <ListItemIcon classes={{ root: classes.test }}>
            <SearchIcon classes={{ primary: classes.test }} />
          </ListItemIcon>
          <ListItemText primary="Search" classes={{ primary: classes.test }} />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SportsBasketballIcon />
          </ListItemIcon>
          <ListItemText primary="Saved Players" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="SavedPlayerName" />
              <ListItemIcon>
                <Tooltip disableFocusListener disableTouchListener title="Edit">
                  <EditIcon />
                </Tooltip>

                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  title="Delete"
                >
                  <DeleteIcon />
                </Tooltip>
              </ListItemIcon>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText primary="Log In" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AssignmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>
      </List>
    </>
  );
}
