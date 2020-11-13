import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Heading from 'App/Components/Heading';
import SafeContainer from 'App/Components/SafeContainer';
import {RootStackParamList} from 'App/Navigators/AppNavigator';
import {addTodo, updateTodo} from 'App/Stores/Todo/Actions';
import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';
import {Formik} from 'formik';
import {omit} from 'ramda';
import React from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

type Props = {
  readonly route: RouteProp<RootStackParamList, 'TodoFormScreen'>;
  readonly navigation: StackNavigationProp<
    RootStackParamList,
    'TodoFormScreen'
  >;
};

const TodoFormScreen: React.FC<Props> = ({route, navigation}) => {
  const {params} = route;
  const dispatch = useDispatch();

  const initialValues = {
    id: params?.id,
    title: params?.title || '',
    description: params?.description || '',
  };

  const formSubmit = (values: typeof initialValues) => {
    if (values.id) {
      dispatch(updateTodo({...values, id: values.id}));
    } else {
      dispatch(addTodo(omit(['id'], values)));
    }
    navigation.goBack();
  };

  return (
    <SafeContainer style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Heading type="h3" style={styles.title}>
        {!params ? 'Add' : 'Edit'} Todo
      </Heading>
      <Formik initialValues={initialValues} onSubmit={formSubmit}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <ScrollView>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline
                numberOfLines={5}
              />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
          </ScrollView>
        )}
      </Formik>
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
  textInput: {
    ...Metrics.verticalPadding,
    ...Metrics.horizontalPadding,
    backgroundColor: Colors.white,
    marginBottom: 2,
  },
});
