import {delay, put} from 'redux-saga/effects';
import {completeStartupAction} from 'App/Stores/Startup/Actions';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startupSaga() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  // Add more operations you need to do at startup here

  // show SplashScreen longer after fetching user
  yield delay(2000);

  yield put(completeStartupAction());
}
