import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import loginbg from "../Assests/Images/loginbg.jpg";
import axios from "axios";

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

const Login = () => {
  //Login Form here
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "https://nbapredictor-backend.herokuapp.com/login",
        `grant_type=password&username=${username}&password=${password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("token_type", res.data.toekn_type);
        localStorage.setItem("expires_in", res.data.expires_in);
        history.push("/playerlist");
      })
      .catch(err => console.error(err.message));
  };

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={loginbg}
          alt="Basketball in a court"
        />
      </div>
      <div className={classes.formContainer}>
        <h1 className={classes.Header}>NBA Career Longevity Predictor</h1>
        <h2 className={classes.subHeader}>Account Login</h2>
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
                  onChange={e => setUsername(e.target.value)}
                  value={username}
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
                  onChange={e => setPassword(e.target.value)}
                  value={password}
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
            className={classes.Button}
          >
            Login!
          </Button>
          <p>
            Don't have an account? <Link to="/">Sign up now!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
