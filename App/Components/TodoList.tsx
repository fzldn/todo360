import {Todo} from 'App/Stores/Todo/Types';
import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';
import React from 'react';
import {ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  readonly data: ReadonlyArray<Todo>;
}

const TodoList: React.FC<Props> = ({data}) => {
  const renderItem: ListRenderItem<Todo> = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    ...Metrics.verticalPadding,
    ...Metrics.horizontalPadding,
    backgroundColor: Colors.white,
    marginBottom: 2,
  },
  itemText: {
    color: Colors.text,
  },
});
