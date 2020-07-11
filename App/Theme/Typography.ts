import Fonts from './Fonts';
import Colors from './Colors';

const headingColor = Colors.text;

const headingFontWeight = 700;

const headingBase = {
  color: headingColor,
  fontWeight: headingFontWeight,
};

const h1 = {
  fontSize: Fonts.h1,
  ...headingBase,
};

const h2 = {
  fontSize: Fonts.h2,
  ...headingBase,
};

const h3 = {
  fontSize: Fonts.h3,
  ...headingBase,
};

export default {
  h1,
  h2,
  h3,
};
