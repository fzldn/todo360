import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

const SafeAreaViewStyled = styled(SafeAreaView)({
  flex: 1,
});

const SafeContainer: React.FC<SafeAreaViewProps> = (props) => (
  <SafeAreaViewStyled {...props}>{props.children}</SafeAreaViewStyled>
);

export default SafeContainer;
