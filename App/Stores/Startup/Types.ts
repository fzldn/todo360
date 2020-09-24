export interface StartupState {
  isLoading: boolean;
  isCompleted: boolean;
}

export const START_UP: string = '@ToDo360/Startup/START_UP';
export const COMPLETE_START_UP: string = '@ToDo360/Startup/COMPLETE';

interface IStartupAction {
  type: string;
}

export type StartupActionTypes = IStartupAction;
