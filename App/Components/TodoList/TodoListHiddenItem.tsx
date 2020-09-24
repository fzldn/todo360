import Colors from 'App/Theme/Colors';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {TodoListItemProps} from './TodoList';
import styles from './TodoListHiddenItemStyle';

type TSwipeDirection = null | 'left' | 'right';

const ItemActionText = styled(Text)(styles.hiddenItemActionText);

const TodoListHiddenItem: React.FC<TodoListItemProps> = (props) => {
  const {
    rowData: {item},
    swipeAnimatedValue,
  } = props;
  const [swipeDirection, setSwipeDirection] = useState<TSwipeDirection>(null);

  if (swipeAnimatedValue) {
    swipeAnimatedValue.addListener(({value}) => {
      let direction: TSwipeDirection = null;

      if (value > 0) {
        direction = 'right';
      } else if (value < 0) {
        direction = 'left';
      }

      if (swipeDirection !== direction) {
        setSwipeDirection(direction);
      }
    });
  }

  const ListHiddenItem = styled(View)({
    ...styles.hiddenItem,
    ...(swipeDirection
      ? swipeDirection === 'right'
        ? {
            ...styles.swipedRight,
            backgroundColor: item.deleted_at
              ? Colors.textMuted
              : item.completed_at
              ? Colors.secondary
              : Colors.primary,
          }
        : {
            ...styles.swipedLeft,
            backgroundColor: Colors.error,
          }
      : {}),
  });

  return (
    <ListHiddenItem>
      <ItemActionText>
        {swipeDirection === 'right' &&
          (item.deleted_at ? 'RESTORE' : item.completed_at ? 'UNDO' : 'DONE')}
        {swipeDirection === 'left' && (item.deleted_at ? 'REMOVE' : 'DELETE')}
      </ItemActionText>
    </ListHiddenItem>
  );
};

export default TodoListHiddenItem;
