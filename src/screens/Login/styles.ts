import { StyleSheet } from 'react-native';
import { Metrics } from '@theme/metrics';
import { colors } from '@theme/colors';

const META_IMAGE_RATIO = 850 / 283;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Metrics.BASE_PADDING_HORIZONTAL
  },
  keyboardDismiss: {
    flex: 1
  },
  language: {
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 40
  },
  logo: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center'
  },
  form: {
    marginTop: 30
  },
  input: {
    backgroundColor: '#324652',
    height: 65,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#647888',
    paddingHorizontal: 10,
    color: colors.white,
    marginTop: 15,
    fontSize: 18
  },
  placeholder: {
    position: 'absolute',
    top: 20,
    left: 10,
    opacity: 0.7
  },
  button: {
    height: 50,
    backgroundColor: '#0162e1',
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 18
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 18
  },
  createButton: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 4
  },
  meta: {
    marginTop: 20,
    height: 20,
    width: 20 * META_IMAGE_RATIO,
    alignSelf: 'center'
  }
});
