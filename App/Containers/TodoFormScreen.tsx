import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Heading from 'App/Components/Heading';
import SafeContainer from 'App/Components/SafeContainer';
import {RootStackParamList} from 'App/Navigators/AppNavigator';
import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

type Props = {
  route: RouteProp<RootStackParamList, 'TodoFormScreen'>;
  navigation: StackNavigationProp<RootStackParamList, 'TodoFormScreen'>;
};

const TodoFormScreen: React.FC<Props> = ({route}) => {
  const {params} = route;

  return (
    <SafeContainer style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Heading type="h3" style={styles.title}>
        {!params ? 'Add' : 'Edit'} Todo
      </Heading>
    </SafeContainer>
  );
};

export default TodoFormScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
  },
  title: {
    ...Metrics.mediumTopMargin,
    ...Metrics.horizontalPadding,
    ...Metrics.bottomMargin,
  },
});
