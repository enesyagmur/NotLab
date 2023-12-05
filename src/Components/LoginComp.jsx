import React from "react";
import "./logRegComp.scss";

const LoginComp = () => {
  return (
    <div className="login-comp">
      <input type="text" placeholder="Email" className="login-page-input" />
      <input type="text" placeholder="Şifre" className="login-page-input" />
      <button className="login-page-btn">Giriş Yap</button>
      <p>Kayıt Ol</p>
    </div>
  );
};

export default LoginComp;
