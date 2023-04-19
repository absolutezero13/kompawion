import { Metrics } from '@theme/metrics';
import { StyleSheet } from 'react-native';

const IMAGE_RATIO = 728 / 196;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
  },
  headerLogo: {
    width: 120,
    height: 120 / IMAGE_RATIO
  },
  iconsWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  divider: {
    width: 10
  },
  stories: {
    marginTop: 20,
    height: 100,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  story: {
    padding: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    borderRadius: 50,
    width: 65,
    height: 65
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30
  },
  separator: {
    width: 15
  },
  storyText: {
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.7,
    fontSize: 12
  }
});
