/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';

type IndicatorProps = {
  scrollX: any;
  data: any[];
};

const {width, height} = Dimensions.get('screen');

const Indicator = ({data, scrollX}: IndicatorProps) => {
  return (
    <View style={styles.root}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 0.9, 0.2],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[
              styles.inner_container,
              {
                transform: [
                  {
                    scale,
                  },
                ],
                opacity,
              },
            ]}
            key={`indicator-${i}`}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
  },
  inner_container: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 10,
  },
});

export default Indicator;
