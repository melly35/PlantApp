/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleProp} from 'react-native';
import {PaywallPaymentItemProps} from '../../../utils/props';
import {RadioButtonItem} from './radio.button.item';

type Props = {
  selected?: PaywallPaymentItemProps;
  onSelected(item: PaywallPaymentItemProps): void;
  items: PaywallPaymentItemProps[];
  style?: StyleProp<any>;
};

export const PaywallRadioGroup = ({
  items,
  onSelected,
  selected,
  style,
}: Props) => {
  return (
    <FlatList
      style={[{flex: 1}, style]}
      data={items}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
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
