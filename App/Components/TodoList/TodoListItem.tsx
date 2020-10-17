import {navigate} from 'App/Services/NavigationService';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {TodoListItemProps} from './TodoList';
import styles from './TodoListItemStyle';

const ListItem = styled(View)(styles.item);

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const {
    rowData: {item},
  } = props;
  const itemOpacity = item.deleted_at ? 0.4 : 1;

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

  return (
    <ListItem>
      <ListItemTitle>{item.title}</ListItemTitle>
      {item.description && (
        <ListItemDescription>{item.description}</ListItemDescription>
      )}
    </ListItem>
  );
};

export default TodoListItem;
