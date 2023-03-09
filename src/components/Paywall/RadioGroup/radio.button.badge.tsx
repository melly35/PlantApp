import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/metrics';

type Props = {
  label: string;
  selected?: boolean;
};

export const RadioButtonBadge = ({label, selected}: Props) => {
  return (
    <View style={[styles.badgeContainer, !selected && styles.selected]}>
      <Text style={[styles.itemTitle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#28AF6E',
    position: 'absolute',
    right: 0,
    top: 0,
    paddingVertical: verticalScale(6),
    paddingHorizontal: verticalScale(10),
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 18,
  },

  itemTitle: {
    color: 'white',
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: verticalScale(14),
  },

  selected: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
