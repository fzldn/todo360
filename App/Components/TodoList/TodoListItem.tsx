import {navigate} from 'App/Services/NavigationService';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {TodoListItemProps} from './TodoList';
import styles from './TodoListItemStyle';

const ListItem = styled(View)(styles.item);

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const {
    rowData: {item},
  } = props;
  const itemOpacity = item.deleted_at ? 0.4 : 1;
  const doublePressDelay = 300;
  const [lastPress, setLastPress] = useState<undefined | number>();

  const ListItemTitle = styled(Text)({
    ...styles.itemTitle,
    ...(item.completed_at ? styles.itemCompleted : {}),
    opacity: itemOpacity,
  });

  const ListItemDescription = styled(Text)({
    ...styles.itemDescription,
    ...(item.completed_at ? styles.itemCompleted : {}),
    opacity: itemOpacity,
  });

  const handleDoublePress = () => {
    const now = new Date().getTime();

    if (lastPress && now - lastPress <= doublePressDelay) {
      setLastPress(undefined);
      navigate('TodoFormScreen', item);
    } else {
      setLastPress(now);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDoublePress}>
      <ListItem>
        <ListItemTitle>{item.title}</ListItemTitle>
        {Boolean(item.description) && (
          <ListItemDescription>{item.description}</ListItemDescription>
        )}
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

export default TodoListItem;
