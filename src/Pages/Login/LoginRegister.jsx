import React from "react";
import "./loginRegister.scss";
import LoginComp from "./components/LoginComp";
import RegisterComp from "./components/RegisterComp";

const Login = () => {
  return (
    <div className="login-register">
      <LoginComp />
      <RegisterComp />
    </div>
  );
};

export default Login;
