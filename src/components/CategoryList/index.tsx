/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleProp, StyleSheet} from 'react-native';
import {CategoryItemProps} from '../../utils/props';
import {CategoryItem} from './category.item';

type Props = {
  style?: StyleProp<any>;
  data: CategoryItemProps[];
};

export const CategoryList = ({style, data}: Props) => {
  return (
    <FlatList
      style={[{flex: 1, marginTop: 20}, style]}
      data={data}
      numColumns={2}
      columnWrapperStyle={styles.row}
      renderItem={({item}) => <CategoryItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
