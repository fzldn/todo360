import React from 'react';
import {TextProps, Text} from 'react-native';
import styled from 'styled-components/native';
import Fonts from 'App/Theme/Fonts';
import Colors from 'App/Theme/Colors';

interface HeadingProps extends TextProps {
  type: 'h1' | 'h2' | 'h3';
}

const TextStyled = styled(Text)({
  ...Fonts.h1,
  color: Colors.text,
  fontWeight: 700,
});

const Heading: React.FC<HeadingProps> = (props) => (
  <TextStyled {...props}>{props.children}</TextStyled>
);

export default Heading;
