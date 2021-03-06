import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from 'App/Stores';
import RootScreen from 'App/Containers/RootScreen/RootScreen';

const {store, persistor} = createStore();

const App = () => {
  return (
    <SafeAreaProvider>
      {/**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */}
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
