import React, { useState } from "react";
import axios from "axios";
import "../Style/Login.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    axios
      .post("http://pratiliapi.herokuapp.com/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response) {
          // console.log(response.data);

          history.push("/story");
        }
      })
      .catch((error) => {
        if (error.response.data.type === "email") {
          setemailError(error.response.data.message);
        } else {
          setpasswordError(error.response.data.message);
        }
        console.log(error.response.data);
      });
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://pratiliapi.herokuapp.com/api/user/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        history.push("/story");
        console.log(response.data[0]);
      })
      .catch((error) => {
        setemailError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="login">
      <div className="form-wrapper">
        <div className="heading">
          <h1>Sign in / Register</h1>
        </div>
        <form>
          <div className="username">
            <input
              type="text"
              className=""
              placeholder="Username"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <span style={{ color: "red" }}>{emailError}</span>
          <div className="password">
            <input
              type="password"
              className=""
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <span style={{ color: "red" }}>{passwordError}</span>
          <div className="button">
            <div className="login__signInButton">
              <button type="submit" onClick={signIn}>
                Sign Up
              </button>
            </div>
            <div className="register__signInButton">
              <button type="submit" onClick={register}>
                Register a New Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
