import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    ...Metrics.horizontalPadding,
    ...Metrics.verticalPadding,
    marginBottom: 2,
    backgroundColor: Colors.white,
  },
  itemTitle: {
    color: Colors.text,
  },
  itemDescription: {
    ...Metrics.tinyTopMargin,
    color: Colors.textMuted,
  },
  itemCompleted: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
