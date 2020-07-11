import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import TodoItem from './TodoItem';
import TodoHiddenItem from './TodoHiddenItem';
import {TodoListProps, SwipeData} from '.';

const TodoList: React.FC<TodoListProps> = (props) => {
  const [swipeData, setSwipeData] = useState<SwipeData>({
    key: '',
    value: 0,
    direction: 'left',
    isOpen: false,
  });

  return (
    <SwipeListView
      data={props.data}
      keyExtractor={(todo) => todo.id}
      renderItem={TodoItem}
      renderHiddenItem={(rowData) => (
        <TodoHiddenItem {...rowData} swipeData={swipeData} />
      )}
      onSwipeValueChange={setSwipeData}
    />
  );
};

export default TodoList;
