import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {CustomIcon} from '../../components/CustomIcon';
import {
  PaywallHorizantalSlide,
  PaywallHorizantalSlider,
} from '../../components/PaywallHorizantalSlider';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import {ScannerIcon} from '../../utils/svg/general';

const OnboardingPaywallScreen = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../../assets/images/paywallScreenTopBg.png')}
        style={[styles.topFixImage]}
        resizeMode="cover"
      />
      <View style={[styles.content]}>
        <Text style={[styles.headTitle]}>
          <Text style={[styles.textBold]}>PlantApp</Text> Premium
        </Text>
        <Text style={[styles.subTitle]}>Access All Features</Text>

     

        <PaywallHorizantalSlider />
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
  textBold: {
    fontWeight: 'bold',
  },
  headTitle: {
    fontSize: verticalScale(30),
    color: 'white',
  },
  subTitle: {
    marginTop: verticalScale(8),
    fontSize: verticalScale(17),
    fontFamily: 'Rubik',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default OnboardingPaywallScreen;
