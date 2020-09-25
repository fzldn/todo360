import React from 'react';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import {
  Dimensions,
  ListRenderItemInfo,
  ViewProps,
  Animated,
} from 'react-native';
import {Todo} from 'App/Stores/Todo/Types';
import TodoListItem from './TodoListItem';
import TodoListHiddenItem from './TodoListHiddenItem';
import {useDispatch} from 'react-redux';
import {
  completeTodo,
  deleteTodo,
  removeTodo,
  restoreTodo,
  undoTodo,
} from 'App/Stores/Todo/Actions';

interface TodoListProps {
  data: Array<Todo>;
}

export interface TodoListItemProps extends ViewProps {
  rowData: ListRenderItemInfo<Todo>;
  rowMap: RowMap<Todo>;
  swipeAnimatedValue?: Animated.Value;
  leftActionActivated?: boolean;
  rightActionActivated?: boolean;
  leftActionState?: boolean;
  rightActionState?: boolean;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const width = Dimensions.get('window').width;
  const {data} = props;
  const dispatch = useDispatch();

  const renderItem = (
    rowData: ListRenderItemInfo<Todo>,
    rowMap: RowMap<Todo>,
  ) => <TodoListItem rowData={rowData} rowMap={rowMap} />;

  const renderHiddenItem = (
    rowData: ListRenderItemInfo<Todo>,
    rowMap: RowMap<Todo>,
  ) => <TodoListHiddenItem rowData={rowData} rowMap={rowMap} />;

  const onLeftOpen = (rowKey: string, rowMap: RowMap<Todo>) => {
    const item = rowMap[rowKey].props.item;

    if (item?.deleted_at) {
      dispatch(restoreTodo(rowKey));
    } else {
      if (item?.completed_at) {
        dispatch(undoTodo(rowKey));
      } else {
        dispatch(completeTodo(rowKey));
      }
    }

    rowMap[rowKey].closeRowWithoutAnimation();
  };

  const onRightOpen = (rowKey: string, rowMap: RowMap<Todo>) => {
    const item = rowMap[rowKey].props.item;

    if (item?.deleted_at) {
      dispatch(removeTodo(rowKey));
    } else {
      dispatch(deleteTodo(rowKey));
      rowMap[rowKey].closeRowWithoutAnimation();
    }
  };

  return (
    <SwipeListView
      data={data}
      keyExtractor={(todo) => todo.id}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={width}
      rightOpenValue={-width}
      swipeToOpenPercent={30}
      onRowDidOpen={(rowKey, rowMap, swipeValue) => {
        if (swipeValue > 0) {
          onLeftOpen(rowKey, rowMap);
        } else if (swipeValue < 0) {
          onRightOpen(rowKey, rowMap);
        }
      }}
    />
  );
};

export default TodoList;
