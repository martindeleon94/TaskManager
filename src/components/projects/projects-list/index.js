import React, { useContext, useEffect } from 'react';
import { Project } from "../single-project";
import projectContext from "../../../context/projects/project-context";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const ProjectList = () => {

  //Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  //Obtener
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  //checks if projects has content
  if(projects.length === 0 ) return <p>No hay proyectos</p>;



  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(project =>(
          <CSSTransition
            key={project.id}
            timeout={200}
            clasNames="proyecto"
          >
            <Project
              project={project}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};
