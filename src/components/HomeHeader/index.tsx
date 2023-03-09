/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {SearchBox} from '../SearchBox';

export const HomeHeader = () => {
  return (
    <View style={[styles.container, {}]}>
      <Image
        style={[styles.bg]}
        source={require('../../../assets/images/homeHeaderBg.png')}
        resizeMode="cover"
      />
      <View style={[styles.insetContainer]}>
        <View>
          <Text style={[styles.hello]}>Hi, plant lover!</Text>
          <Text style={[styles.title]}>Good Afternoon! ⛅</Text>
        </View>

        <SearchBox
          label="Search for plants"
          onSearch={e => console.log('onSearch', e)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: verticalScale(150),
  },

  insetContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24),
    paddingTop: verticalScale(10),
    justifyContent: 'space-between',
  },

  hello: {
    fontSize: verticalScale(16),
    fontFamily: 'Rubik',
    fontWeight: '400',
  },

  title: {
    fontSize: verticalScale(24),
    color: '#13231B',
    fontFamily: 'Rubik',
    fontWeight: '500',
  },

  bg: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: verticalScale(80),
    opacity: 0.8,
  },
});
