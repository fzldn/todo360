import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TodoListProps} from '.';
import {View, Text, Dimensions} from 'react-native';
import styles from './TodoListStyle';

const TodoList: React.FC<TodoListProps> = ({data}) => (
  <SwipeListView
    data={data}
    keyExtractor={(todo) => todo.id}
    renderItem={(rowData) => (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{rowData.item.title}</Text>
        {rowData.item.description && (
          <Text style={styles.itemDescription}>{rowData.item.description}</Text>
        )}
      </View>
    )}
    renderHiddenItem={() => (
      <View style={styles.hiddenItem}>
        <View style={styles.hiddenItemAction}>
          <Text style={styles.hiddenItemActionText}>DONE</Text>
        </View>
        <View style={styles.hiddenItemAction}>
          <Text style={styles.hiddenItemActionText}>DELETE</Text>
        </View>
      </View>
    )}
    leftOpenValue={Dimensions.get('window').width}
    rightOpenValue={-Dimensions.get('window').width}
  />
);

export default TodoList;
