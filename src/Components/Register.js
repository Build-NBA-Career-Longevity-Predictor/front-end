import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [newRegister, setNewRegister] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = event => {
    setNewRegister({
      ...newRegister,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`https://nbapredictor-backend.herokuapp.com/signup`, newRegister)
      .then(response => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("token_type", res.data.token_type);
        localStorage.setItem("expires_in", res.data.expires_in);
      })
      .catch(error => console.log(error.response));

    setNewRegister({ username: "", password: "", email: "" });
  };
  return (
    <div className="register-main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          value={newRegister.username}
        />
        <label htmlFor="password"></label>
        <input
          name="password"
          id="password"
          type="text"
          placeholder="Password"
          onChange={changeHandler}
          value={newRegister.password}
        />
        <label htmlFor="email"></label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email"
          onChange={changeHandler}
          value={newRegister.email}
        />

        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Register;
