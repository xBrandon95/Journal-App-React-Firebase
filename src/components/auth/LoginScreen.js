import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/authActions";
import { removeErrorAction, setErrorAction } from "../../actions/uiActions";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction("El correo no es valido"));
      return false;
    } else if (password.trim() === "") {
      dispatch(setErrorAction("La contraseña es obligatorio"));
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Iniciar Sesión</h3>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error center">{msgError}</div>}
        <input
          type="text"
          className="auth__input"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Correo"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input mt-5"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary btn-block"
        >
          INGRESAR
        </button>
        <div className="auth__social-networks">
          <p>Iniciar sesión con otras cuentas:</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="/img/Google__G__Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Ingresar con Google</b>
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
