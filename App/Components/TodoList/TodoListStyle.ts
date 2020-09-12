import {StyleSheet} from 'react-native';
import Metrics from 'App/Theme/Metrics';
import Colors from 'App/Theme/Colors';

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
  hiddenItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    backgroundColor: Colors.transparent,
  },
  leftHiddenItemAction: {
    ...Metrics.horizontalPadding,
    ...Metrics.verticalPadding,
    flex: 1,
    alignItems: 'flex-start',
  },
  rightHiddenItemAction: {
    ...Metrics.horizontalPadding,
    ...Metrics.verticalPadding,
    flex: 1,
    alignItems: 'flex-end',
  },
  hiddenItemActionText: {
    fontWeight: 'bold',
    color: Colors.white,
  },
});
