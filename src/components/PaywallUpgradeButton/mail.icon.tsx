/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {verticalScale} from '../../utils/metrics';

type Props = {
  badgeCount?: number;
};

export const GradientMailIcon = ({badgeCount}: Props) => {
  return (
    <View>
      <Image
        source={require('../../../assets/icons/gradientMail.png')}
        resizeMode="contain"
        style={[styles.icon]}
      />
      {badgeCount && badgeCount > 0 && (
        <View style={[styles.badge]}>
          <Text style={[styles.badgeText]}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: verticalScale(30),
    width: verticalScale(30),
  },
  badge: {
    position: 'absolute',
    top: -3.5,
    right: -7,
    height: verticalScale(15),
    width: verticalScale(15),
    borderRadius: 15,
    backgroundColor: '#E82C13',
  },
  badgeText: {
    color: '#fff',
    fontSize: verticalScale(12),
    fontFamily: 'Rubik',
    fontWeight: '500',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
