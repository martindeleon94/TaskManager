import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATES_FORM, CURRENT_PROJECT, DELETE_PROJECT,
} from '../../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {

    case PROJECT_FORM:
    return {
      ...state,
      form: true
    }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorform: false
      }
    case VALIDATES_FORM:
      return {
        ...state,
        errorform: true
      }
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(project => project.id === action.payload)
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        project: null
      }
    default:
      return state;
  }
}
