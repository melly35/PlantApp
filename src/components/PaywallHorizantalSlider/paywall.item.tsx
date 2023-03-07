import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export const PaywallItem = ({item}) => {
  return (
    <View style={[styles.itemContainer]}>
      <View style={[styles.iconContainer]}>
        <Image source={item.icon} resizeMode="contain" style={[styles.icon]} />
      </View>
      <View>
        <Text style={[styles.itemTitle]}>{item.title}</Text>
        <Text style={[styles.itemSubTitle]}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: verticalScale(160),
    height: verticalScale(130),
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(35,48,41, 0.95)',
    padding: verticalScale(16),
    justifyContent: 'space-between',
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
  iconContainer: {
    width: verticalScale(36),
    height: verticalScale(36),
    backgroundColor: 'rgba(0,0,0, 0.24)',
    justifyContent: 'center',
    borderRadius: 8,
  },
  icon: {
    width: verticalScale(17),
    height: verticalScale(17),
    alignSelf: 'center',
  },
});
