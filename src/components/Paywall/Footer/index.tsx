import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {verticalScale} from '../../../utils/metrics';

const Links = [
  {
    label: 'Terms',
    href: '',
  },
  {
    label: 'Privacy',
    href: '',
  },
  {
    label: 'Restore',
    href: '',
  },
];

export const PaywallFooter = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.itemTitle]}>
        After the 3-day free trial period you’ll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>

      <View style={[styles.links]}>
        {Links.map((item, index, row) => {
          return (
            <>
              <Text style={[styles.linkText]}>{item.label}</Text>
              {row.length !== index + 1 && <View style={[styles.dot]} />}
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: verticalScale(65)},

  itemTitle: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 10,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.52)',
  },

  selected: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  links: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  linkText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
});
