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
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 10
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
  bigDivider: {
    width: 15
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
  },
  postHeader: {
    width: Metrics.SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  dotsIcon: {
    marginLeft: 'auto'
  },
  postPicture: {
    width: Metrics.SCREEN_WIDTH,
    height: Metrics.SCREEN_WIDTH
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between'
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.SCREEN_WIDTH / 3
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: 'rgba(255,255,255,0.33)'
  },
  activeDot: {
    width: 7,
    height: 7,
    backgroundColor: '#3897F0',
    borderRadius: 3.5,
    marginRight: 5
  },
  userActionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.SCREEN_WIDTH / 3
  },
  autoMl: {
    marginLeft: 'auto'
  },
  likesAndComments: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
  },
  userInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 2
  },
  comments: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL,
    marginTop: 2
  },
  viewComments: {
    color: 'rgba(255,255,255,0.5)'
  },
  comment: {
    marginTop: 5
  },
  time: {
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
  },
  timeText: {
    color: 'rgba(255,255,255,0.5)',
    marginTop: 5,
    fontSize: 10
  }
});
