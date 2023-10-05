import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const username = form.get("username");
    const password = form.get("password");

    const data = {
      username,
      password,
    };
    console.log(data);
  };

  return (
    <div>
      <form className="login-form" onSubmit={submitForm}>
        <h1>Ilmiy admin</h1>
        <div className="txtb">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="txtb">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className="logbtn">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
