import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Login = () => {

  //State para iniciar sesion
  const[ user, saveUser] = useState({
    email: '',
    password: ''
  });

  //Extraer de user
  const { email, password } = user;

  const onChange = e => {
    saveUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  //Cuando el usuario quiere iniciar Sesion
  const onSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios

    //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        <Link to={"/new-user"} className="enlace-cuenta">
          Crear cuenta
        </Link>
      </div>
    </div>
  );
};
