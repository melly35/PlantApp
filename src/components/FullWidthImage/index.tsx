import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {Image} from 'react-native-svg';

type Props = {
  imageSrc: ImageSourcePropType;
};

export const FullWidthImage = ({imageSrc}: Props) => {
  const {width, height} = Image.resolveAssetSource(image);
  const ratio = height / width;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  return (
    <Image
      source={imageSrc}
      style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH * ratio}}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {},
});
