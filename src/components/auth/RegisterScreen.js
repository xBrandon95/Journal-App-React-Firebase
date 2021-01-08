import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registrarse</h3>
      <form>
        <input
          type="text"
          className="auth__input"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
        />

        <input
          type="text"
          className="auth__input mt-5"
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

        <input
          type="password"
          className="auth__input mt-5"
          name="password2"
          placeholder="Confimar Contraseña"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Crear cuenta
        </button>

        <Link to="/auth/login" className="link mt-5">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
};
