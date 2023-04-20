import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation
} from '@react-navigation/native';

const FadeInView = ({ children }) => {
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
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
