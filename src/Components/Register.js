import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { registerUser } from "../Actions/userActions";
import registerbg from "../Assests/Images/registerbg.jpg";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  imgContainer: {
    width: "70%",
    height: "100vh"
  },
  img: {
    width: "100%",
    height: "100%",
    filter: "grayscale(100%)"
  },
  formContainer: {
    background: "#17408B",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  Form: {
    background: "white",
    borderRadius: "5px",
    boxShadow: "2px 4px 5px #000",
    padding: "30px 50px",
    fontFamily: "Lato, sans-serif"
  },
  TextField: {
    width: 400,
    margin: "5px 0"
  },
  Input: {
    fontSize: "24px",
    fontFamily: "Lato, sans-serif"
  },
  Label: {
    fontSize: "18px",
    fontFamily: "Lato, sans-serif"
  },
  Icon: {
    //
  },
  Button: {
    width: "440px",
    margin: "10px 0",
    fontSize: "18px",
    fontFamily: "Lato, sans-serif"
  },
  Header: {
    fontFamily: "Oswald, sans-serif",
    color: "white",
    paddingTop: "20%",
    paddingBottom: "5%",
    fontSize: "42px"
  },
  subHeader: {
    fontFamily: "Oswald, sans-serif",
    color: "white",
    fontSize: "30px"
  }
}));

const Register = () => {
  const [newRegister, setNewRegister] = useState({
    username: "",
    password: "",
    email: ""
  });
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);

  const changeHandler = event => {
    setNewRegister({
      ...newRegister,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registerUser(newRegister));
  };

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={registerbg}
          alt="Basketball in a court"
        />
      </div>
      <div className={classes.formContainer}>
        <h1 className={classes.Header}>NBA Career Longevity Predictor</h1>
        <h2 className={classes.subHeader}>Start getting predictions now!</h2>
        <form className={classes.Form} onSubmit={handleSubmit}>
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item style={{ paddingBottom: "18px" }}>
                <PersonIcon className={classes.Icon} />
              </Grid>
              <Grid item>
                <TextField
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                  shrink="false"
                  className={classes.TextField}
                  onChange={changeHandler}
                  value={newRegister.username}
                  InputProps={{ className: classes.Input }}
                  InputLabelProps={{ className: classes.Label }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item style={{ paddingBottom: "18px" }}>
                <LockIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={changeHandler}
                  value={newRegister.password}
                  className={classes.TextField}
                  InputProps={{ className: classes.Input }}
                  InputLabelProps={{ className: classes.Label }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item style={{ paddingBottom: "18px" }}>
                <EmailIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  onChange={changeHandler}
                  value={newRegister.email}
                  className={classes.TextField}
                  InputProps={{ className: classes.Input }}
                  InputLabelProps={{ className: classes.Label }}
                />
              </Grid>
            </Grid>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={state.isRegistering}
            className={classes.Button}
          >
            Sign Up!
          </Button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
