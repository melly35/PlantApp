import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import slides from '../../utils/slides';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container]}>
      <Image
        source={item.image}
        style={[styles.image, {width: verticalScale(width)}]}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minWidth: Dimensions.get('window').width,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  image: {
    flex: 1,
    minWidth: Dimensions.get('window').width,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
});
