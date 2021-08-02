import React from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
  Login,
  NewUser,
  Projects,
} from "./components";

import ProjectState from './context/projects/project-state/index';
import TaskState from "./context/tasks/task-state";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Projects} />
          </Switch>
        </Router>
      </TaskState>

    </ProjectState>
  );
}

export default App;
