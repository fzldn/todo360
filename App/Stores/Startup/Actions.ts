import {START_UP, COMPLETE_START_UP, StartupActionTypes} from './Types';

export const startup = (): StartupActionTypes => ({type: START_UP});
export const completeStartup = (): StartupActionTypes => ({
  type: COMPLETE_START_UP,
});
