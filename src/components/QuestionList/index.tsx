/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleProp, StyleSheet, Text} from 'react-native';
import {verticalScale} from '../../utils/metrics';
import {QuestionItemProps} from '../../utils/props';
import {QuestionItem} from './item';

type Props = {
  style?: StyleProp<any>;
  data: QuestionItemProps[];
};

export const QuestionList = ({style, data}: Props) => {
  return (
    <>
      <Text style={[style, styles.title]}>Get Started</Text>
      <FlatList
        style={[{flex: 1}, style]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <QuestionItem item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#13231B',
    fontWeight: '500',
    fontFamily: 'Rubik',
    fontSize: verticalScale(20),
    marginBottom: verticalScale(20),
  },
});
