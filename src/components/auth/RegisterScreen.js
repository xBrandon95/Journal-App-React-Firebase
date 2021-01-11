import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorAction, setErrorAction } from "../../actions/uiActions";
import { startRegisterWithEmailPasswordName } from "../../actions/authActions";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Brandon",
    email: "brandon@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
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
      <form onSubmit={handleRegister}>
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

        <Link to="/auth/login" className="link mt-5">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
};
