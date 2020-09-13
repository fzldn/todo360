import {Todo} from 'App/Types/Todo';
import {COMPLETE} from './ActionTypes';

export interface TodoAction {
  type: string;
  payload: Todo | string;
}

export interface DispatchTodo {
  (action: TodoAction): void;
}

export const complete = (id: Todo | string): TodoAction => ({
  type: COMPLETE,
  payload: id,
});
