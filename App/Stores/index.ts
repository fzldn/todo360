import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import StartupReducer from 'App/Stores/Startup/Reducers';
import {TodoReducer} from 'App/Stores/Todo/Reducers';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import {TodoState} from './Todo/Types';
import {StartupState} from './Startup/Types';

export interface AppState {
  readonly startup: StartupState;
  readonly todo: TodoState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['todo', 'startup'],
};

const todoPersistConfig = {
  key: 'todo',
  storage: AsyncStorage,
  blacklist: [],
};

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    startup: StartupReducer,
    todo: persistReducer(todoPersistConfig, TodoReducer),
  });

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return configureStore(persistedReducer, rootSaga);
};
