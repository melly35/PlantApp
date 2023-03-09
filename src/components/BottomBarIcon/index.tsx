/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleProp, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import {verticalScale} from '../../utils/metrics';

type Props = {
  imageSource: ImageSourcePropType;
  style?: StyleProp<any>;
};

export const BottomBarIcon = ({imageSource, style}: Props) => {
  return (
    <Image
      source={imageSource}
      resizeMode="contain"
      style={[styles.icon, style]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: verticalScale(24),
    height: verticalScale(24),
  },
});
