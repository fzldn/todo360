import {AppState} from 'App/Stores';
import {sort} from 'ramda';

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
  const sortedCreatedAt = sort(
    (a, b) => dateCompare(a.created_at, b.created_at),
    state.todo.todos,
  );
  const sortedCompletedAt = sort(
    (a, b) => dateCompare(a.completed_at, b.completed_at),
    sortedCreatedAt,
  );
  return sort(
    (a, b) => dateCompare(a.deleted_at, b.deleted_at),
    sortedCompletedAt,
  );
};
