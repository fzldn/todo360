import {
  COMPLETE_TODO,
  DELETE_TODO,
  RESTORE_TODO,
  Todo,
  TodosActionTypes,
  UNDO_TODO,
} from './Types';

export const completeTodo = (todo: Todo | string): TodosActionTypes => ({
  type: COMPLETE_TODO,
  payload: todo,
});

export const undoTodo = (todo: Todo | string): TodosActionTypes => ({
  type: UNDO_TODO,
  payload: todo,
});

export const restoreTodo = (todo: Todo | string): TodosActionTypes => ({
  type: RESTORE_TODO,
  payload: todo,
});

export const deleteTodo = (todo: Todo | string): TodosActionTypes => ({
  type: DELETE_TODO,
  payload: todo,
});
