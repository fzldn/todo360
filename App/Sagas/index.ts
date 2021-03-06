import {all, takeLatest} from 'redux-saga/effects';
import {START_UP} from 'App/Stores/Startup/Types';
import {startupSaga} from './StartupSaga';

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(START_UP, startupSaga),
  ]);
}
