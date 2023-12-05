import React from "react";
import "./logRegComp.scss";

const RegisterComp = () => {
  return (
    <div className="register-comp">
      <input type="text" placeholder="Email" className="login-page-input" />
      <input type="text" placeholder="Şifre" className="login-page-input" />
      <button className="login-page-btn">Kayıt Ol</button>
      <p>Giriş Yap</p>
    </div>
  );
};

export default RegisterComp;
