import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="login-form">
        <h1>Ilmiy admin</h1>
        <div className="txtb">
          <input type="text" placeholder="Username" />
        </div>
        <div className="txtb">
          <input type="password" placeholder="Password" />
        </div>
        <Link to={"/admin"}>
          <input type="submit" value="Kirish" className="logbtn" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
