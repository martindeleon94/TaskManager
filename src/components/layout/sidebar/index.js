import React from 'react';
import {
  NewProject,
  ProjectList,
} from "../../projects";

export const Sidebar = () => {
  return (
    <aside>
      <h1>De León <span>Task</span></h1>
      <NewProject />
      <div className="proyectos">
        <h2>Proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  );
};
