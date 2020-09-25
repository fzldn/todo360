export interface StartupState {
  isLoading: boolean;
  isCompleted: boolean;
}

export const START_UP: '@ToDo360/Startup/START_UP' =
  '@ToDo360/Startup/START_UP';
export const COMPLETE_START_UP: '@ToDo360/Startup/COMPLETE' =
  '@ToDo360/Startup/COMPLETE';

interface IStartupAction {
  type: typeof START_UP | typeof COMPLETE_START_UP;
}

export type StartupActionTypes = IStartupAction;
