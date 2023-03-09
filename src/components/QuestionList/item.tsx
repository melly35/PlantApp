import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {QuestionItemProps} from '../../utils/props';

export const QuestionItem = ({item}: {item: QuestionItemProps}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('WebViewScreen', {url: item.uri})}>
      <ImageBackground
        style={[styles.itemContainer]}
        source={{uri: item.image_uri}}
        resizeMode="contain">
        <View style={[styles.textContainer]}>
          <Text style={[styles.itemTitle]}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: verticalScale(240),
    height: verticalScale(164),
    marginRight: 12,
    borderRadius: 14,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  itemTitle: {
    color: 'white',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: verticalScale(15),
  },
  textContainer: {
    flex: 0.3,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
});
