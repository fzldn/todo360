import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen';
import {useSelector} from 'react-redux';
import {selectStartupIsCompleted} from 'App/Stores/Startup/Selectors';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import TodoFormScreen from 'App/Containers/TodoFormScreen';
import {Todo} from 'App/Stores/Todo/Types';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'App/Services/NavigationService';

export type RootStackParamList = {
  readonly HomeScreen: undefined;
  readonly TodoFormScreen: Todo | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const startupCompleted = useSelector(selectStartupIsCompleted);

  if (!startupCompleted) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TodoFormScreen" component={TodoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
