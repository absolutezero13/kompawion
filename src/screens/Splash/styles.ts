import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

const IMAGE_SIZE = 150;
const META_IMAGE_SIZE = 20;
const META_IMAGE_RATIO = 874 / 285;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.splashBackground
  },
  splashImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginBottom: IMAGE_SIZE / 2,
    borderRadius: 20
  },
  bottomPart: {
    position: 'absolute',
    bottom: '5%'
  },
  metaImage: {
    width: META_IMAGE_SIZE * META_IMAGE_RATIO,
    height: META_IMAGE_SIZE
  },
  fromText: {
    textAlign: 'center',
    color: colors.white,
    opacity: 0.5,
    fontSize: 12
  }
});
