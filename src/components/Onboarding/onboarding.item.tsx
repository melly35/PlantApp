import React from 'react';
import {StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const OnboardingItem = ({item}) => {
  const {width} = Dimensions.get('window');
  const imageAspectRatio = 563 / 913;
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={item?.bgImageUse && item?.bgImage}
      resizeMode="cover"
      style={[
        styles.container,
        {
          width: width,
          paddingTop: insets.top,
        },
      ]}>
      <Image
        source={item.image}
        style={[
          styles.image,
          {
            minWidth: width,
            aspectRatio: imageAspectRatio,
          },
        ]}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },

  image: {
    flex: 1,
  },
});
