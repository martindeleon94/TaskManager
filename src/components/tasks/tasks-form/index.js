import React, { useContext, useState, useEffect }from 'react';
import projectContext from "../../../context/projects/project-context";
import taskContext from "../../../context/tasks/task-context";

export const FormTask = () => {

  //Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //Gets context function
  const tasksContext = useContext(taskContext)
  const { selectedTask, errorTask, addTask, validatesTask, getTasks, updatesTask } = tasksContext;

  //Effect checks if there is a selected task
  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask)
    } else {
      setTask({
        taskTitle: ''
      })
    }
  },[selectedTask]);

  //Form State
  const [task, setTask] = useState({
    taskTitle: ''
  })

  const { taskTitle } = task;

  //No selected project
  if(!project) return null;

  //Array destructuring to extract current project
  const [currentProject] = project;

  //Reads form values
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    //Validates
    if(taskTitle.trim() === '') {
      validatesTask();
      return;
    }

    //Checks if edit or adds
    if(selectedTask === null) {
      //Adds task to task state
      task.projectId = currentProject.id;
      task.state = false;
      addTask(task);
    } else {
      //Updates task
      updatesTask(task);
    }

    //Get and filter tasks from the current project
    getTasks(currentProject.id);

    //Restarts form
    setTask({
      taskTitle: ''
    })
  }

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Tarea"
            name="taskTitle"
            value={taskTitle}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={selectedTask ? 'Editar tarea' : 'Agregar tarea'}
          />
        </div>
      </form>
      { errorTask ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
    </div>
  );
};
