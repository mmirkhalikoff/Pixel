import {Animated, StyleSheet, ViewStyle} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface SkeletonProps {
  width: string | number;
  height: number;
  style?: ViewStyle;
}

const Skeleton = ({width, height, style}: SkeletonProps) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        style,
        {opacity: opacity.current, height, width},
      ]}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  skeleton: {
    margin: 1,
    backgroundColor: 'gray',
  },
});
