import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {horizontalScale, verticalScale} from '../../../utils/metrics';
import Ionic from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress?(event: GestureResponderEvent): void;
};

export const PaywallCloseButton = ({onPress}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      style={[
        styles.badgeContainer,
        {top: insets.top + 20, right: insets.right + 20},
      ]}
      onPress={onPress}>
      <Ionic name={'close'} color={'white'} size={18} style={[styles.icon]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    width: horizontalScale(28),
    height: horizontalScale(28),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    padding: verticalScale(6),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    alignSelf: 'center',
  },
});
