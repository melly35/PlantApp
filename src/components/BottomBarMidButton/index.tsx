/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export const BottomBarMidButton = () => {
  return (
    <LinearGradient colors={['#28AF6E', '#2CCC80']} style={[styles.container]}>
      <Image
        resizeMode={'contain'}
        source={require('../../../assets/icons/scan.png')}
        style={[styles.midLogo]}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -verticalScale(25),
    width: horizontalScale(60),
    height: horizontalScale(60),
    backgroundColor: '#28AF6E',
    padding: verticalScale(16),
    borderRadius: 100,
    borderWidth: horizontalScale(5),
    borderColor: 'rgba(255, 255, 255, 0.24)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  midLogo: {
    width: horizontalScale(26),
    height: horizontalScale(26),
    alignSelf: 'center',
  },
});
