import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TodoListProps} from '.';
import {View, Text, Dimensions} from 'react-native';
import styles from './TodoListStyle';
import Colors from 'App/Theme/Colors';

interface IRowSwipeValues {
  [key: string]: null | 'left' | 'right';
}

interface SwipeData {
  key: string;
  value: number;
  direction: 'left' | 'right';
  isOpen: boolean;
}

const TodoList: React.FC<TodoListProps> = ({data}) => {
  const [rowSwipeValues, setRowSwipeValues] = useState<IRowSwipeValues>({});

  const onSwipeValueChange = ({key, value}: SwipeData) => {
    const direction = value > 0 ? 'right' : value < 0 ? 'left' : null;
    const rowSwipeValue = rowSwipeValues[key] ?? null;

    if (direction !== rowSwipeValue) {
      setRowSwipeValues({
        ...rowSwipeValues,
        [key]: direction,
      });
    }
  };

  return (
    <SwipeListView
      data={data}
      keyExtractor={(todo) => todo.id}
      renderItem={({item}) => {
        const textStyleCompleted =
          item.completed_at !== null ? styles.itemCompleted : {};
        return (
          <View style={styles.item}>
            <Text style={[styles.itemTitle, textStyleCompleted]}>
              {item.title}
            </Text>
            {item.description && (
              <Text style={[styles.itemDescription, textStyleCompleted]}>
                {item.description}
              </Text>
            )}
          </View>
        );
      }}
      renderHiddenItem={({item}) => {
        let direction = rowSwipeValues[item.id] ?? null;
        let rightSwiped = direction === 'right';
        let leftSwiped = direction === 'left';
        return (
          <View
            style={[
              styles.hiddenItem,
              {
                backgroundColor: rightSwiped
                  ? item.completed_at === null
                    ? Colors.primary
                    : Colors.secondary
                  : leftSwiped
                  ? Colors.error
                  : Colors.transparent,
              },
            ]}>
            {rightSwiped && (
              <View style={styles.leftHiddenItemAction}>
                <Text style={styles.hiddenItemActionText}>
                  {item.completed_at === null ? 'DONE' : 'UNDO'}
                </Text>
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
      onSwipeValueChange={onSwipeValueChange}
      onRowDidOpen={(id, rowMap) => rowMap[id].closeRow()}
    />
  );
};

export default TodoList;
