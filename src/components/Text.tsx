import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colors } from '@theme/colors';

const Text = (props: TextProps) => {
  return (
    <RNText {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.white
  }
});

export default Text;
