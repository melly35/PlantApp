/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import paywallData from '../../../utils/paywallAttributesData';
import {PaywallPaymentItemProps} from '../../../utils/props';
import {RadioButtonItem} from './radio.button.item';

type Props = {
  selected?: PaywallPaymentItemProps;
  onSelected(item: PaywallPaymentItemProps): void;
  items: PaywallPaymentItemProps[];
};

export const PaywallRadioGroup = ({items, onSelected, selected}: Props) => {
  return (
    <FlatList
      style={[{flex: 1, borderWidth: 1, borderColor: 'red'}]}
      data={items}
      renderItem={({item}) => (
        <RadioButtonItem
          item={item}
          selected={selected}
          onSelected={onSelected}
        />
      )}
    />
  );
};
