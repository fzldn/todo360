import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  RESTORE_TODO,
  Todo,
  TodoActionTypes,
  TodoAdd,
  TodoUpdate,
  UNDO_TODO,
  UPDATE_TODO,
} from './Types';

export const completeTodo = (todo: Todo | string): TodoActionTypes => ({
  type: COMPLETE_TODO,
  payload: todo,
});

export const undoTodo = (todo: Todo | string): TodoActionTypes => ({
  type: UNDO_TODO,
  payload: todo,
});

export const deleteTodo = (todo: Todo | string): TodoActionTypes => ({
  type: DELETE_TODO,
  payload: todo,
});

export const restoreTodo = (todo: Todo | string): TodoActionTypes => ({
  type: RESTORE_TODO,
  payload: todo,
});

export const removeTodo = (todo: Todo | string): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: todo,
});

export const addTodo = (todo: TodoAdd): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo: TodoUpdate): TodoActionTypes => ({
  type: UPDATE_TODO,
  payload: todo,
});
