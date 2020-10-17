import {START_UP, COMPLETE_START_UP, StartupActionTypes} from './Types';

export const startupAction = (): StartupActionTypes => ({type: START_UP});
export const completeStartupAction = (): StartupActionTypes => ({
  type: COMPLETE_START_UP,
});
