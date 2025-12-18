import React from "react";
import "../css/Login.css";
const Login = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <form>
        <h3>Login</h3>

        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          placeholder="Email o Telefono"
          id="username"
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
        />

        <button type="submit">Log In</button>

        <p className="social-text">
        </p>

        <div className="social-icons">
          <button className="social-icon fb" type="button">
            <i className="fa-brands fa-facebook"></i>
          </button>

          <button className="social-icon tw" type="button">
            <i className="fa-brands fa-twitter"></i>
          </button>

          <button className="social-icon in" type="button">
            <i className="fa-brands fa-instagram"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
