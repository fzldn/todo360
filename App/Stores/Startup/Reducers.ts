import {StartupState, INITIAL_STATE} from './InitialState';
import {StartupAction} from './Actions';
import {START_UP, COMPLETE} from './ActionTypes';

export default function (
  state: StartupState = INITIAL_STATE,
  action: StartupAction,
): StartupState {
  switch (action.type) {
    case START_UP:
      return {
        ...state,
        isLoading: true,
        isCompleted: false,
      };
    case COMPLETE:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
      };
    default:
      return state;
  }
}
