import {Todo} from 'App/Types/Todo';
import {AppState} from '..';

const sortTodo = (a: Todo, b: Todo) => {
  if (a.deleted_at !== null && b.deleted_at === null) {
    return 1;
  } else if (a.deleted_at === null && b.deleted_at !== null) {
    return -1;
  } else if (a.deleted_at !== null && b.deleted_at !== null) {
    if (a.deleted_at < b.deleted_at) {
      return -1;
    } else if (a.deleted_at > b.deleted_at) {
      return 1;
    }
  }

  if (a.completed_at !== null && b.completed_at === null) {
    return 1;
  } else if (a.completed_at === null && b.completed_at !== null) {
    return -1;
  } else if (a.completed_at !== null && b.completed_at !== null) {
    if (a.completed_at < b.completed_at) {
      return 1;
    } else if (a.completed_at > b.completed_at) {
      return -1;
    }
  }

  if (a.created_at < b.created_at) {
    return -1;
  } else if (a.created_at > b.created_at) {
    return 1;
  }

  return 0;
};

export const getTodos = (state: AppState) => {
  let filtered = state.todo.todos.filter((todo) => todo.deleted_at === null);
  filtered.sort(sortTodo);
  return filtered;
};
