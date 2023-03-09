/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleProp,
  ImageSourcePropType,
  Image,
  StyleSheet,
} from 'react-native';

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
  icon: {},
});
