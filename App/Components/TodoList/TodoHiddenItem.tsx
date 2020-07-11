import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Metrics from 'App/Theme/Metrics';
import {Todo} from 'App/Types/Todo';
import {TodoHiddenItemProps} from '.';

const ViewStyled = styled(View)({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 2,
});

const ViewActionStyled = styled(View)(Metrics.horizontalPadding);

const LeftViewActionStyled = styled(ViewActionStyled)({
  opacity: 0,
});
const RightViewActionStyled = styled(ViewActionStyled)({
  opacity: 0,
});

const TodoHiddenItem: React.FC<TodoHiddenItemProps<Todo>> = () => {
  return (
    <ViewStyled>
      <LeftViewActionStyled>
        <Text>DONE</Text>
      </LeftViewActionStyled>
      <RightViewActionStyled>
        <Text>DELETE</Text>
      </RightViewActionStyled>
    </ViewStyled>
  );
};

export default TodoHiddenItem;
