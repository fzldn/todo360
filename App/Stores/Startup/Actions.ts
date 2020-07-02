import {START_UP, COMPLETE} from './ActionTypes';

export interface StartupAction {
  type: string;
}

export interface DispatchStartup {
  (action: StartupAction): void;
}

export const startup = (): StartupAction => ({type: START_UP});
export const complete = (): StartupAction => ({type: COMPLETE});
