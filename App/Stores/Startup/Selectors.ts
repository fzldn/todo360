import {AppState} from 'App/Stores';

export const selectStartupIsCompleted = (state: AppState) => {
  return state.startup.isCompleted;
};
