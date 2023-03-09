/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';

type Props = {
  label: string;
  style?: StyleProp<any>;
  textBold?: boolean;
  onPress?(e: GestureResponderEvent): void;
};

export const Button = ({label, style, textBold, onPress}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, {fontWeight: textBold ? 'bold' : '500'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#28AF6E',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(16),
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: horizontalScale(18),
  },
});
