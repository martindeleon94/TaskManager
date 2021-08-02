import React, { Fragment, useContext } from 'react';
import {
  Task,
} from "../single-task";

import projectContext from "../../../context/projects/project-context";
import taskContext from "../../../context/tasks/task-context/index"

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const TaskList = () => {

  //Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  //Get task context
  const tasksContext = useContext(taskContext)
  const { projectTask } = tasksContext;

  //No selected project
  if(!project) return <h2>Selecciona un proyecto</h2>

  //Array destructuring to extract current project
  const [currentProject] = project;

  //Deletes project
  const onClickDelete = () => {
    deleteProject(currentProject.id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.title}</h2>
      <ul className="listado-tareas">
        {projectTask.length === 0
          ? <li className="tarea"><p>No hay tareas</p></li>
          :
          <TransitionGroup>
            {projectTask.map(task => (
            <CSSTransition
              key={task.id}
              timeout={200}
              classNames="tarea"
            >
              <Task
                task={task}
              />
            </CSSTransition>
          ))}
          </TransitionGroup>
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >Eliminar proyecto &times;</button>
    </Fragment>
  );
};
