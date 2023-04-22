import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const FadeInView = ({ children }: Props) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.addListener('focus', () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
    });
    navigation.addListener('blur', () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true
      }).start();
    });
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
