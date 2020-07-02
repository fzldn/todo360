import {AppState} from '..';

export const isCompleted = (state: AppState) => {
  return state.startup.isCompleted;
};
