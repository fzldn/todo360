import {TodoState, INITAL_STATE} from './InitialState';
import {TodoAction} from './Actions';

export default function (
  state: TodoState = INITAL_STATE,
  action: TodoAction,
): TodoState {
  switch (action.type) {
    default:
      return state;
  }
}
