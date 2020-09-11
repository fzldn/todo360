import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TodoListProps} from '.';
import {View, Text, Dimensions} from 'react-native';
import styles from './TodoListStyle';
import Colors from 'App/Theme/Colors';

interface IRowSwipeValues {
  [key: string]: number;
}

const TodoList: React.FC<TodoListProps> = ({data}) => {
  const [rowSwipeValues, setRowSwipeValues] = useState<IRowSwipeValues>({});
  return (
    <SwipeListView
      data={data}
      keyExtractor={(todo) => todo.id}
      renderItem={(rowData) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{rowData.item.title}</Text>
          {rowData.item.description && (
            <Text style={styles.itemDescription}>
              {rowData.item.description}
            </Text>
          )}
        </View>
      )}
      renderHiddenItem={({item}) => {
        let swipeValue = rowSwipeValues[item.id] ?? 0;
        let rightSwiped = swipeValue > 0;
        let leftSwiped = swipeValue < 0;
        return (
          <View
            style={[
              styles.hiddenItem,
              {
                backgroundColor: rightSwiped
                  ? Colors.primary
                  : leftSwiped
                  ? Colors.error
                  : Colors.transparent,
              },
            ]}>
            {rightSwiped && (
              <View style={styles.leftHiddenItemAction}>
                <Text style={styles.hiddenItemActionText}>DONE</Text>
              </View>
            )}
            {leftSwiped && (
              <View style={styles.rightHiddenItemAction}>
                <Text style={styles.hiddenItemActionText}>DELETE</Text>
              </View>
            )}
          </View>
        );
      }}
      leftOpenValue={Dimensions.get('window').width}
      rightOpenValue={-Dimensions.get('window').width}
      onSwipeValueChange={({key, value}) => {
        setRowSwipeValues({...rowSwipeValues, [key]: value});
      }}
    />
  );
};

export default TodoList;
