/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleProp} from 'react-native';
import paywallData from '../../../utils/paywallAttributesData';
import {PaywallItem} from './slider.item';

type Props = {
  style?: StyleProp<any>;
};

export const PaywallHorizantalSlider = ({style}: Props) => {
  return (
    <FlatList
      style={[{flex: 1}, style]}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={paywallData}
      renderItem={({item}) => <PaywallItem item={item} />}
    />
  );
};
