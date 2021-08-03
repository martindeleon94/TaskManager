import {
  PROJECT_TASKS,
  ADD_TASK, VALIDATES_TASK, DELETE_TASK, STATE_TASK, CURRENT_TASK, UPDATE_TASK,
} from "../../../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTask: state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTask: false
      }
    case VALIDATES_TASK:
      return {
        ...state,
        errorTask: true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasks: state.projectTask.map(task => task.id === action.payload.id ? action.payload : task ),
        selectedTask: null
      }
    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload
      }
    default:
      return state;
  }
}
