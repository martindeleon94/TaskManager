import React from 'react';
import {
  Sidebar,
  Header
} from "../../layout";
import {
  FormTask,
  TaskList,
} from "../../tasks";

export const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

