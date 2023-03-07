import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../components/Button';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import slides from '../../utils/slides';
import {OnboardingItem} from './OnboardingItem';

export const OnboardingScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/slideStartBg.png')}
      resizeMode="cover"
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[styles.imageContainer]}>
          <Image
            style={[styles.image]}
            source={require('../../../assets/images/sliderStart.png')}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.actionContainer]}>
          <Button
            label="Get Started"
            textBold
            onPress={() => navigation.navigate('OnboardingSlide')}
          />
          <Text style={[styles.policyAndTerm]}>
            By tapping next, you are agreeing to PlantID{' '}
            <Text style={[styles.underline]}>Terms of Use</Text> &{' '}
            <Text style={[styles.underline]}>Privacy Policy.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.82,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainer: {
    flex: 0.18,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    marginTop: verticalScale(5),
  },
  underline: {
    textDecorationLine: 'underline',
  },
  policyAndTerm: {
    paddingTop: 18,
    textAlign: 'center',
    width: horizontalScale(300),
    color: 'rgba(89, 113, 101, 0.7)',
  },
});
