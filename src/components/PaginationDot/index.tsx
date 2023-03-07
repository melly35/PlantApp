/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  ViewStyle,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export type Props = {
  activeIndex: number;
  items: Array<any>;
};

const PAGINATIN_DOT: ViewStyle = {
  width: 6,
  height: 6,
  borderRadius: 20,
  backgroundColor: 'rgba(19, 35, 27, 0.25)',
  marginRight: 8,
  alignSelf: 'center',
};

const PAGINATIN_DOT_SELECTED: ViewStyle = {
  width: 10,
  height: 10,
  backgroundColor: '#13231B',
};

export const PaginationDot = ({activeIndex, items}: Props) => {
  return (
    <View style={[styles.container]}>
      {items.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              PAGINATIN_DOT,
              activeIndex === index && PAGINATIN_DOT_SELECTED,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(16),
    borderRadius: 12,
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    marginRight: 4,
  },
});
