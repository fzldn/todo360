import {TodoState, INITAL_STATE} from './InitialState';
import {TodoAction} from './Actions';
import {COMPLETE} from './ActionTypes';

export default function (
  state: TodoState = INITAL_STATE,
  action: TodoAction,
): TodoState {
  const {type, payload} = action;
  switch (type) {
    case COMPLETE:
      const id = typeof payload === 'string' ? payload : payload.id;
      let todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed_at = new Date();
        }
        return todo;
      });
      return {...state, todos};
    default:
      return state;
  }
}
