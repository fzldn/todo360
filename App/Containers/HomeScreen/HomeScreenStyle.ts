import {StyleSheet} from 'react-native';
import Metrics from 'App/Theme/Metrics';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fbf5f5',
  },
  title: {
    ...Metrics.mediumTopMargin,
    ...Metrics.horizontalPadding,
    ...Metrics.bottomMargin,
  },
});
