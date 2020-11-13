export interface Todo {
  readonly id: string;
  readonly title: string;
  readonly description: string | null;
  readonly completed_at: Date | null;
  readonly deleted_at: Date | null;
  readonly created_at: Date;
  readonly updated_at: Date;
}

export type TodoAdd = Partial<Omit<Todo, 'id'>> & Pick<Todo, 'title'>;

export type TodoUpdate = Partial<Todo> & Pick<Todo, 'id'>;

export interface TodoState {
  readonly todos: ReadonlyArray<Todo>;
}

export const COMPLETE_TODO: '@ToDo360/Todo/COMPLETE' = '@ToDo360/Todo/COMPLETE';
export const UNDO_TODO: '@ToDo360/Todo/UNDO' = '@ToDo360/Todo/UNDO';
export const DELETE_TODO: '@ToDo360/Todo/DELETE' = '@ToDo360/Todo/DELETE';
export const RESTORE_TODO: '@ToDo360/Todo/RESTORE' = '@ToDo360/Todo/RESTORE';
export const REMOVE_TODO: '@ToDo360/Todo/REMOVE' = '@ToDo360/Todo/REMOVE';

export const ADD_TODO: '@ToDo360/Todo/ADD' = '@ToDo360/Todo/ADD';
export const UPDATE_TODO: '@ToDo360/Todo/UPDATE' = '@ToDo360/Todo/UPDATE';

interface ITodoAction {
  readonly type:
    | typeof COMPLETE_TODO
    | typeof UNDO_TODO
    | typeof DELETE_TODO
    | typeof RESTORE_TODO
    | typeof REMOVE_TODO;
  readonly payload: Todo | string;
}

interface ITodoAddAction {
  readonly type: typeof ADD_TODO;
  readonly payload: TodoAdd;
}

interface ITodoUpdateAction {
  readonly type: typeof UPDATE_TODO;
  readonly payload: TodoUpdate;
}

export type TodoActionTypes = ITodoAction | ITodoAddAction | ITodoUpdateAction;
