import {AppState} from '..';

export const getTodos = (state: AppState) => {
  return state.todo.todos;
};
