import React from 'react';
import {View, Text, ListRenderItemInfo} from 'react-native';
import {Todo} from 'App/Types/Todo';
import styled from 'styled-components/native';
import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';

const ViewStyled = styled(View)({
  ...Metrics.horizontalPadding,
  ...Metrics.verticalPadding,
  marginBottom: 2,
  backgroundColor: Colors.white,
});

const TitleStyled = styled(Text)({});

const DescriptionStyled = styled(Text)({
  ...Metrics.tinyTopMargin,
  color: Colors.textMuted,
});

const TodoItem: React.FC<ListRenderItemInfo<Todo>> = ({item: todo}) => {
  return (
    <ViewStyled>
      <TitleStyled>{todo.title}</TitleStyled>
      {todo.description && (
        <DescriptionStyled>{todo.description}</DescriptionStyled>
      )}
    </ViewStyled>
  );
};

export default TodoItem;
