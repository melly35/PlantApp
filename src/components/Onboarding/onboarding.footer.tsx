/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {horizontalScale} from '../../utils/metrics';

export const SlidePrivacyFooter = () => {
  return (
    <Text style={[styles.policyAndTerm]}>
      By tapping next, you are agreeing to PlantID{' '}
      <Text style={[styles.underline]}>Terms of Use</Text> &{' '}
      <Text style={[styles.underline]}>Privacy Policy.</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
  policyAndTerm: {
    paddingTop: 18,
    textAlign: 'center',
    width: horizontalScale(300),
    color: 'rgba(89, 113, 101, 0.7)',
  },
});
