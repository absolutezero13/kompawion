import { StyleSheet } from 'react-native';
import { Metrics } from '@theme/metrics';

const ITEM_WIDTH = Metrics.SCREEN_WIDTH / 3;

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 10
  },
  video: {
    height: ITEM_WIDTH * 2,
    width: ITEM_WIDTH,
    borderWidth: 1,
    borderColor: '#000'
  },
  photo: {
    height: ITEM_WIDTH,
    width: ITEM_WIDTH,
    borderWidth: 1,
    borderColor: '#000'
  },
  loading: {
    position: 'absolute',
    width: Metrics.SCREEN_WIDTH / 3,
    height: Metrics.SCREEN_WIDTH / 3
  }
});
