import React from 'react';
import {TextProps, Text} from 'react-native';
import styled from 'styled-components/native';
import Typography from 'App/Theme/Typography';

interface HeadingProps extends TextProps {
  readonly type: 'h1' | 'h2' | 'h3';
}

const TextStyled = styled(Text)(
  (props: HeadingProps) => Typography[props.type],
);

const Heading: React.FC<HeadingProps> = (props) => (
  <TextStyled {...props}>{props.children}</TextStyled>
);

export default Heading;
