import React, {Fragment, useContext, useState} from 'react';
import projectContext from "../../../context/projects/project-context";

export const NewProject = () => {

  // Get form state
  const projectsContext = useContext(projectContext);
  const { form, errorform, showForm, addProject, showErr } = projectsContext;

  const [project, setProject] = useState({
    title: ''
  });

  //Extract title from state
  const { title } = project;

  //reads project title from input
  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }
  //Submit
  const onSubmitProject = e => {
    e.preventDefault();

    //Validar el proyecto

    if(title === '') {
      showErr();
      return;
    }

    //Agregar al state
    addProject(project)

    //Reinicia el form
    setProject({
      title: ''
    })

  }
//Show Form
  const onClickForm = () => {
    showForm();
  }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={ onClickForm }
      >
        Nuevo proyecto
      </button>
      {form
          ?
          (
            <form
              className="formulario-nuevo-proyecto"
              onSubmit={onSubmitProject}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Nombre del proyecto"
                name="title"
                value={title}
                onChange={onChangeProject}
              />
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar proyecto"
              />
            </form>
          ) : null }
      { errorform ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

