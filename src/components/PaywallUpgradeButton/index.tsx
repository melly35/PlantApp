/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Image,
  View,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {GradientMailIcon} from './mail.icon';

type Props = {
  label: string;
  subLabel: string;
  style?: StyleProp<any>;
  textBold?: boolean;
  onPress?(e: GestureResponderEvent): void;
};

export const PaywallUpgradeButton = ({
  label,
  subLabel,
  style,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <GradientMailIcon badgeCount={1} />
      <View>
        <Text style={[styles.text]}>{label}</Text>
        <Text style={[styles.subText]}>{subLabel}</Text>
      </View>

      <Ionic
        name={'chevron-forward-sharp'}
        color={'#D0B070'}
        size={30}
        style={{alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(64),
    backgroundColor: '#24201A',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    borderRadius: horizontalScale(12),
  },
  text: {
    color: '#E5C990',
    fontSize: verticalScale(18),
    fontWeight: '700',
  },

  subText: {
    color: '#FFDE9C',
    fontSize: verticalScale(13),
    fontFamily: 'Rubik',
    fontWeight: '400',
  },
});
