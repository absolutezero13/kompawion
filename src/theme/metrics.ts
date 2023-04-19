import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BASE_PADDING_HORIZONTAL = 24;

export const Metrics = {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BASE_PADDING_HORIZONTAL
};
