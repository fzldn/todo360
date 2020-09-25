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

export const COMPLETE_TODO: '@ToDo360/Todo/COMPLETE' = '@ToDo360/Todo/COMPLETE';
export const UNDO_TODO: '@ToDo360/Todo/UNDO' = '@ToDo360/Todo/UNDO';
export const DELETE_TODO: '@ToDo360/Todo/DELETE' = '@ToDo360/Todo/DELETE';
export const RESTORE_TODO: '@ToDo360/Todo/RESTORE' = '@ToDo360/Todo/RESTORE';
export const REMOVE_TODO: '@ToDo360/Todo/REMOVE' = '@ToDo360/Todo/REMOVE';

interface ITodoAction {
  type:
    | typeof COMPLETE_TODO
    | typeof UNDO_TODO
    | typeof DELETE_TODO
    | typeof RESTORE_TODO
    | typeof REMOVE_TODO;
  payload: Todo | string;
}

export type TodoActionTypes = ITodoAction;
