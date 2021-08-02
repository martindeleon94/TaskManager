import React, { useContext } from 'react';
import projectContext from "../../../context/projects/project-context";
import taskContext from "../../../context/tasks/task-context/index"

export const Project = ({project}) => {
  // Get form state
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  //Get task context
  const tasksContext = useContext(taskContext)
  const { getTasks } = tasksContext;

  //Funcion para agregar el proyecto actual
  const selectProject = id => {
    currentProject(id); //Fijar un proyecto actual
    getTasks(id); // Filtra las tareas al clic
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => selectProject(project.id) }
      >{project.title} </button>
    </li>
  );
};
