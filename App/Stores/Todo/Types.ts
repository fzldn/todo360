export interface Todo {
  id: string;
  title: string;
  description: string | null;
  completed_at: Date | null;
  deleted_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface TodoState {
  todos: Array<Todo>;
}

export const COMPLETE_TODO: string = '@ToDo360/Todo/COMPLETE';
export const UNDO_TODO: string = '@ToDo360/Todo/UNDO';
export const RESTORE_TODO: string = '@ToDo360/Todo/RESTORE';
export const DELETE_TODO: string = '@ToDo360/Todo/DELETE';
export const REMOVE_TODO: string = '@ToDo360/Todo/REMOVE';

interface ITodoAction {
  type: string;
  payload: Todo | string;
}

export type TodosActionTypes = ITodoAction;
