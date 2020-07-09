import {StyleSheet} from 'react-native';
import Metrics from 'App/Theme/Metrics';
import Colors from 'App/Theme/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
  },
  title: {
    ...Metrics.mediumTopMargin,
    ...Metrics.horizontalPadding,
    ...Metrics.bottomMargin,
  },
});
