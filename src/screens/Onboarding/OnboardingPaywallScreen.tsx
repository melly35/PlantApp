import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics';

const OnboardingPaywallScreen = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../../assets/images/paywallScreenTopBg.png')}
        style={[styles.topFixImage]}
        resizeMode="cover"
      />
      <View style={[styles.content]}>
        <Text>Paywall Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101E17',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  topFixImage: {
    flex: 0.65,
    width: Dimensions.get('window').width,
    height: verticalScale(Dimensions.get('window').height * 0.65),
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: 'white',
    flex: 0.65,
    width: Dimensions.get('window').width,
    height: verticalScale(500),
  },
});

export default OnboardingPaywallScreen;
