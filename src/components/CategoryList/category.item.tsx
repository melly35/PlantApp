import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {CategoryItemProps} from '../../utils/props';

export const CategoryItem = ({item}: {item: CategoryItemProps}) => {
  return (
    <TouchableOpacity style={[styles.itemContainer]} key={item.id}>
      <Image
        source={{uri: item.image.url}}
        resizeMode="cover"
        style={[styles.iconContainer]}
      />
      <View style={[styles.textContainer]}>
        <Text style={[styles.itemTitle]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 0.5,
    height: verticalScale(152),
    maxWidth: horizontalScale(158),
    borderRadius: horizontalScale(12),
    backgroundColor: '#F4F6F6',
    overflow: 'hidden',
    marginBottom: 10,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.2,
  },
  itemTitle: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: verticalScale(20),
  },
  textContainer: {
    zIndex: 1,
    width: '80%',
    paddingTop: verticalScale(10),
    paddingLeft: horizontalScale(10),
  },
  iconContainer: {
    position: 'absolute',
    width: '70%',
    height: '100%',
    right: 0,
    borderBottomRightRadius: horizontalScale(12),
    borderTopRightRadius: horizontalScale(12),
  },
});
