import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colors } from '@theme/colors';

const Text = (props: TextProps & { bold?: boolean }) => {
  return (
    <RNText
      {...props}
      style={[
        styles.defaultText,
        {
          fontFamily: props.bold ? 'Roboto-Bold' : 'Roboto-Regular'
        },
        props.style
      ]}
    >
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 14,
    color: colors.white
  }
});

export default Text;
