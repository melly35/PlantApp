/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import paywallData from '../../utils/paywallData';
import {PaywallItem} from './paywall.item';

export const PaywallHorizantalSlider = () => {
  return (
    <FlatList
      style={[]}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={paywallData}
      renderItem={({item}) => <PaywallItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {},
});
