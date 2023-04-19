import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, ViewStyle } from 'react-native';

interface BounceableButtonProps {
  children: React.ReactNode | React.ReactNode[];
  style?: ViewStyle;
}

const BounceableButton = ({ children, style }: BounceableButtonProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }]
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
    >
      <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
    </TouchableOpacity>
  );
};

export default BounceableButton;
