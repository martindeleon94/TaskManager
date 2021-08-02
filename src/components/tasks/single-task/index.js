import React, { useContext } from 'react';
import projectContext from "../../../context/projects/project-context";
import taskContext from "../../../context/tasks/task-context";

export const Task = ({task}) => {

  //Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //Gets context function
  const tasksContext = useContext(taskContext)
  const { deleteTask, getTasks, updatesStatus, saveCurrentTask } = tasksContext;

  //Extracts project
  const [currentProject] = project;

  //Deletes task
  const delTask = id => {
    deleteTask(id);
    getTasks(currentProject.id);
  }
  //Updates Status
  const changeStatus = task => {
    if(task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    updatesStatus(task);
  }

  //Adds current task to edit
  const selectTask = task => {
    saveCurrentTask(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.taskTitle}</p>
      <div className="estado">
        {task.status
          ?
            (
              <button
                type="button"
                className="completo"
                onClick={() => changeStatus(task)}
              >Completo</button>
            )
          :
            (
              <button
                type="button"
                className="incompleto"
                onClick={() => changeStatus(task)}
              >Incompleto</button>
            )
        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >Editar</button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => delTask(task.id)}
        >Eliminar</button>
      </div>
    </li>
  );
};
