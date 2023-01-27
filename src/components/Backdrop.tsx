/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';

type Props = {
  scrollX: any;
};
const {width, height} = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

const Backdrop = ({scrollX}: Props) => {
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(val => val),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, {backgroundColor: bg}]}
    />
  );
};

export default Backdrop;
