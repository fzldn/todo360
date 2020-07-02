import React from 'react';
import {StatusBar, Text} from 'react-native';
import SafeContainer from 'App/Components/SafeContainer';
import styles from './SplashScreenStyle';

const SplashScreen = () => {
  return (
    <SafeContainer style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.logo}>ToDo360</Text>
    </SafeContainer>
  );
};

export default SplashScreen;
