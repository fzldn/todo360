import {AppState} from 'App/Stores';

const dateCompare = (a: Date | null, b: Date | null) => {
  if (!a && b) {
    return -1;
  } else if (a && !b) {
    return 1;
  } else if (a && b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
  }
  return 0;
};

export const selectTodos = (state: AppState) => {
  let filtered = state.todo.todos;
  filtered.sort((a, b) => dateCompare(a.created_at, b.created_at));
  filtered.sort((a, b) => dateCompare(a.completed_at, b.completed_at));
  filtered.sort((a, b) => dateCompare(a.deleted_at, b.deleted_at));
  return filtered;
};
