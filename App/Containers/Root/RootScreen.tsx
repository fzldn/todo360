import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {startup, DispatchStartup} from 'App/Stores/Startup/Actions';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'App/Navigators/AppNavigator';
import {navigationRef} from 'App/Services/NavigationService';

const RootScreen = () => {
  const dispatch: DispatchStartup = useDispatch<DispatchStartup>();

  useEffect(() => {
    dispatch(startup());
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootScreen;
