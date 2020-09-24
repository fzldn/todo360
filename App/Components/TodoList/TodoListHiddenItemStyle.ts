import Colors from 'App/Theme/Colors';
import Metrics from 'App/Theme/Metrics';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  hiddenItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    backgroundColor: Colors.transparent,
  },
  swipedLeft: {
    alignItems: 'flex-end',
  },
  swipedRight: {
    alignItems: 'flex-start',
  },
  hiddenItemActionText: {
    ...Metrics.horizontalMargin,
    ...Metrics.verticalMargin,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
