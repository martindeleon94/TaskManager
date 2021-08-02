import React, {useReducer} from "react";

import { v4 as uuidv4 } from 'uuid';

import projectContext from "../project-context";
import projectReducer from "../project-reducer/index";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATES_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../../types'


const ProjectState = props => {
  const projects = [
    {id: 0, title: ''},
  ]

  const initialState = {
    projects: [],
    form: false,
    errorform:false,
    project: null
  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer( projectReducer, initialState )

  //Serie de funciones para el CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  //Get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  //ADD project
  const addProject = project => {
    project.id = uuidv4();

    //Add project in state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  //Validates form
  const showErr = () => {
    dispatch({
      type: VALIDATES_FORM
    })
  }

  //Select project
  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  //Delete project
  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showErr,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;
