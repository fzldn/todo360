import Fonts from './Fonts';
import Colors from './Colors';
import {StyleProp, TextStyle} from 'react-native';

const headingColor = Colors.text;

const headingFontWeight = '700';

const headingBase: StyleProp<TextStyle> = {
  color: headingColor,
  fontWeight: headingFontWeight,
};

const h1: StyleProp<TextStyle> = {
  fontSize: Fonts.h1,
  ...headingBase,
};

const h2: StyleProp<TextStyle> = {
  fontSize: Fonts.h2,
  ...headingBase,
};

const h3: StyleProp<TextStyle> = {
  fontSize: Fonts.h3,
  ...headingBase,
};

export default {
  h1,
  h2,
  h3,
};
