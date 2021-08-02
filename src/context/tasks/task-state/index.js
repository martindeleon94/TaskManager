import React, { useReducer } from "react";
import TaskContext from "../task-context";
import TaskReducer from '../task-reducer';
import uuid from 'react-uuid';
import {
  ADD_TASK,
  PROJECT_TASKS,
  VALIDATES_TASK,
  DELETE_TASK,
  STATE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
} from "../../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      {id: 0, taskTitle: '', status: false, projectId: 0 },

    ],
    projectTask: null,
    errorTask: false,
    selectedTask: null
  }
  // Creates dispatch
  const [state,dispatch] = useReducer(TaskReducer, initialState)

  //Crear Funciones
  //Obtener las tareas de un proyecto
  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  //Adds task
  const addTask = task => {
    task.id = uuid();
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  //VALIDA Y MUESTRA ERROR
  const validatesTask = () => {
    dispatch({
      type: VALIDATES_TASK
    })
  }

  //DELETE TASK BY ID
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }
  //Change task status
  const updatesStatus = task => {
    dispatch({
      type: STATE_TASK,
      payload: task
    })
  }

  //EXTRAE UNA TAREA PARA EDITION
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  //UPDATES
  const updatesTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  return(
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTask : state.projectTask,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validatesTask,
        deleteTask,
        updatesStatus,
        saveCurrentTask,
        updatesTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState

