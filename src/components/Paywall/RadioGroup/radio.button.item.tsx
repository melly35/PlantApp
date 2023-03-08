import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/metrics';
import {PaywallPaymentItemProps} from '../../../utils/props';

type Props = {
  selected?: PaywallPaymentItemProps;
  onSelected(item: PaywallPaymentItemProps): void;
  item: PaywallPaymentItemProps;
};

export const RadioButtonItem = ({item, selected, onSelected}: Props) => {
  return (
    <TouchableOpacity
      key={item?.id}
      style={[styles.itemContainer]}
      onPress={() => onSelected(item)}>
      <View style={[styles.radioBtn]}>
        {selected?.id === item.id && <View style={[styles.radioBtnSelected]} />}
      </View>

      <View style={[{flex: 1}]}>
        <Text style={[styles.itemTitle]}>{item.title}</Text>
        <Text style={[styles.itemSubTitle]}>{item.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: verticalScale(76),
    flexDirection: 'row',
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(35,48,41, 0.95)',
    padding: verticalScale(14),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'white',
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: verticalScale(20),
  },
  itemSubTitle: {
    marginTop: 6,
    color: 'rgba(255,255,255, 0.7)',
  },

  radioBtn: {
    width: horizontalScale(24),
    height: horizontalScale(24),
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    marginRight: 10,
    overflow: 'hidden',
  },
  radioBtnSelected: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 8,
    borderRadius: 24,
    borderColor: '#28AF6E',
  },
});
