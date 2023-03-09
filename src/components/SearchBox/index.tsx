/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import Ionic from 'react-native-vector-icons/Ionicons';

type Props = {
  label: string;
  onSearch: (e: string) => void;
};

export const SearchBox = ({label, onSearch}: Props) => {
  return (
    <View style={[styles.container, {}]}>
      <Ionic name={'search'} color={'#ABABAB'} size={20} />
      <TextInput
        style={[styles.input]}
        placeholder={label}
        placeholderTextColor={'#ABABAB'}
        onChangeText={e => onSearch(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: verticalScale(44 + 8),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: horizontalScale(12),
    borderWidth: 0.5,
    borderColor: 'rgba(60, 60, 67, 0.25)',
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#212121',
    paddingLeft: 10,
    fontSize: verticalScale(18),
  },
});
