export interface StartupState {
  isLoading: boolean;
  isCompleted: boolean;
}

export const INITIAL_STATE: StartupState = {
  isLoading: false,
  isCompleted: false,
};
