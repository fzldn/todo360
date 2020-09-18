import React, {useState} from 'react';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import {TodoListProps} from '.';
import {View, Text, Dimensions, ListRenderItemInfo} from 'react-native';
import styles from './TodoListStyle';
import Colors from 'App/Theme/Colors';
import {Todo} from 'App/Types/Todo';

interface IRowSwipeValues {
  [key: string]: null | 'left' | 'right';
}

interface SwipeData {
  key: string;
  value: number;
  direction: 'left' | 'right';
  isOpen: boolean;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const [rowSwipeValues, setRowSwipeValues] = useState<IRowSwipeValues>({});

  const renderItem = (
    rowData: ListRenderItemInfo<Todo>,
    _rowMap: RowMap<Todo>,
  ) => {
    const {item} = rowData;
    const textStyleCompleted =
      item.completed_at !== null ? styles.itemCompleted : {};
    return (
      <View style={styles.item}>
        <Text style={[styles.itemTitle, textStyleCompleted]}>{item.title}</Text>
        {item.description && (
          <Text style={[styles.itemDescription, textStyleCompleted]}>
            {item.description}
          </Text>
        )}
      </View>
    );
  };

  const onSwipeValueChange = ({key, value}: SwipeData) => {
    const direction = value > 0 ? 'right' : value < 0 ? 'left' : null;
    const rowSwipeValue = rowSwipeValues[key] ?? null;

    if (direction !== rowSwipeValue) {
      setRowSwipeValues({...rowSwipeValues, [key]: direction});
    }
  };

  return (
    <SwipeListView
      data={props.data}
      keyExtractor={(todo) => todo.id}
      renderItem={renderItem}
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
      onSwipeValueChange={onSwipeValueChange}
      leftActivationValue={Dimensions.get('window').width / 3}
      rightActivationValue={-Dimensions.get('window').width / 3}
      leftActionValue={Dimensions.get('window').width}
      rightActionValue={-Dimensions.get('window').width}
      onLeftAction={(rowKey, rowMap) => console.log(rowKey, rowMap)}
      onRightAction={(rowKey, rowMap) => console.log(rowKey, rowMap)}
    />
  );
};

export default TodoList;
