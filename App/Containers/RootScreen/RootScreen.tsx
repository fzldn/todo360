import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {startupAction} from 'App/Stores/Startup/Actions';
import AppNavigator from 'App/Navigators/AppNavigator';

const RootScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startupAction());
  });

  return <AppNavigator />;
};

export default RootScreen;
