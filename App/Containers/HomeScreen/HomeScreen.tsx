import React from 'react';
import SafeContainer from 'App/Components/SafeContainer';
import styles from './HomeScreenStyle';
import Heading from 'App/Components/Heading';
import {useSelector} from 'react-redux';
import {selectTodos} from 'App/Stores/Todo/Selectors';
import TodoList from 'App/Components/TodoList/TodoList';
import {StatusBar} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Colors from 'App/Theme/Colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/Navigators/AppNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const todos = useSelector(selectTodos);

  return (
    <SafeContainer style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Heading type="h1" style={styles.title}>
        Todo
      </Heading>
      <TodoList data={todos} />
      <FloatingAction
        color={Colors.primary}
        position="center"
        onPressMain={() => navigation.navigate('TodoFormScreen')}
        showBackground={false}
        animated={false}
      />
    </SafeContainer>
  );
};

export default HomeScreen;
