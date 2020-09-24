import {
  START_UP,
  COMPLETE_START_UP,
  StartupState,
  StartupActionTypes,
} from './Types';

const initialState: StartupState = {
  isLoading: false,
  isCompleted: false,
};

export default function (
  state: StartupState = initialState,
  action: StartupActionTypes,
): StartupState {
  switch (action.type) {
    case START_UP:
      return {
        isLoading: true,
        isCompleted: false,
      };
    case COMPLETE_START_UP:
      return {
        isLoading: false,
        isCompleted: true,
      };
    default:
      return state;
  }
}
