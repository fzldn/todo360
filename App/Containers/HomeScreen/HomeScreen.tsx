import React from 'react';
import SafeContainer from 'App/Components/SafeContainer';
import styles from './HomeScreenStyle';
import Heading from 'App/Components/Heading';

const HomeScreen = () => {
  return (
    <SafeContainer style={styles.container}>
      <Heading type="h1" style={styles.title}>
        Todo
      </Heading>
    </SafeContainer>
  );
};

export default HomeScreen;
