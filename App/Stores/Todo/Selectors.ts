import {AppState} from 'App/Stores';
import {Todo} from './Types';

const dateCompare = (a: Date, b: Date) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
};

const sortTodo = (a: Todo, b: Todo) => {
  if (!a.deleted_at && b.deleted_at) {
    return -1;
  } else if (a.deleted_at && !b.deleted_at) {
    return 1;
  } else if (a.deleted_at && b.deleted_at) {
    if (!a.completed_at && b.completed_at) {
      return -1;
    } else if (a.completed_at && !b.completed_at) {
      return 1;
    } else if (a.completed_at && b.completed_at) {
      return dateCompare(a.completed_at, b.completed_at);
    }

    return dateCompare(a.deleted_at, b.deleted_at);
  }

  if (!a.completed_at && b.completed_at) {
    return -1;
  } else if (a.completed_at && !b.completed_at) {
    return 1;
  } else if (a.completed_at && b.completed_at) {
    return dateCompare(a.completed_at, b.completed_at);
  }

  return dateCompare(a.created_at, b.created_at);
};

export const selectTodos = (state: AppState) => {
  let filtered = state.todo.todos;
  filtered.sort(sortTodo);
  return filtered;
};
