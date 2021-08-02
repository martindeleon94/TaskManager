import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const NewUser = () => {

  //State para iniciar sesion
  const[ user, saveUser] = useState({
    name:'',
    email: '',
    password: '',
    confirm: ''
  });

  //Extraer de user
  const { name, email, password, confirm } = user;

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

    //Password minimo de 6 caracteres

    //Password iguales

    //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirm">Confirmar password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirma tu password"
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a iniciar sesion
        </Link>
      </div>
    </div>
  );
};
