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
  hiddenItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    backgroundColor: Colors.textMuted,
  },
  hiddenItemAction: Metrics.horizontalPadding,
  hiddenItemActionText: {
    fontWeight: 'bold',
    color: Colors.white,
  },
});
