import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorAction, setErrorAction } from "../../actions/uiActions";
import {
  startGoogleLogin,
  startRegisterWithEmailPasswordName,
} from "../../actions/authActions";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction("El nombre es obligatorio"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction("El correo no es valido"));
      return false;
    } else if (password !== password2) {
      dispatch(setErrorAction("Las contraseñas no son iguales"));
      return false;
    } else if (password.length < 6) {
      dispatch(
        setErrorAction("La contraseña debe ser de por lo menos 6 caracteres")
      );
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">REGISTRATE</h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error center">{msgError}</div>}

        <input
          type="text"
          className="auth__input"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Nombre"
          autoComplete="off"
        />

        <input
          type="text"
          className="auth__input mt-5"
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

        <input
          type="password"
          className="auth__input mt-5"
          name="password2"
          value={password2}
          onChange={handleInputChange}
          placeholder="Confimar Contraseña"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Crear cuenta
        </button>

        <div className="auth__social-networks" onClick={handleGoogleLogin}>
          <p>o registrate con:</p>
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

        <Link to="/auth/login" className="link mt-5">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
};
