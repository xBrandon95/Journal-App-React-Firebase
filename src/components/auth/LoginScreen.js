import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Iniciar Sesión</h3>
      <form>
        <input
          type="text"
          className="auth__input"
          name="email"
          placeholder="Correo"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input mt-5"
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit" className="btn btn-primary btn-block">
          INGRESAR
        </button>
        <div className="auth__social-networks">
          <p>Iniciar sesión con otras cuentas:</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="/img/Google__G__Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Registrarse con Google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Crearse cuenta
        </Link>
      </form>
    </>
  );
};
