import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen';
import {useSelector} from 'react-redux';
import {isCompleted} from 'App/Stores/Startup/Selectors';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const startupCompleted = useSelector(isCompleted);

  if (!startupCompleted) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
