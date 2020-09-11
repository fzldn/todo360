import React from 'react';
import SafeContainer from 'App/Components/SafeContainer';
import styles from './HomeScreenStyle';
import Heading from 'App/Components/Heading';
import {useSelector} from 'react-redux';
import {getTodos} from 'App/Stores/Todo/Selectors';
import TodoList from 'App/Components/TodoList/TodoList';
import {StatusBar} from 'react-native';

const HomeScreen = () => {
  const todos = useSelector(getTodos);

  return (
    <SafeContainer style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Heading type="h1" style={styles.title}>
        Todo
      </Heading>
      <TodoList data={todos} />
    </SafeContainer>
  );
};

export default HomeScreen;
