import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Button} from '../../components/Button';
import {CustomIcon} from '../../components/CustomIcon';
import {PaywallCloseButton} from '../../components/Paywall/CloseButton';
import {PaywallFooter} from '../../components/Paywall/Footer';
import {
  PaywallHorizantalSlide,
  PaywallHorizantalSlider,
} from '../../components/Paywall/HorizontalSlider';
import {PaywallRadioGroup} from '../../components/Paywall/RadioGroup';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import paywallPaymentData from '../../utils/paywallPaymentData';
import {PaywallPaymentItemProps} from '../../utils/props';
import {ScannerIcon} from '../../utils/svg/general';

import {setOnboardingSuccess} from '../../context/slices/onBoardingSlice';
import Actions from '../../redux/actions';

const PaywallScreen = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<PaywallPaymentItemProps>(
    paywallPaymentData[1],
  );
  const onSelected = (item: PaywallPaymentItemProps) => {
    setSelected(item);
  };
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../../assets/images/paywallScreenTopBg.png')}
        style={[styles.topFixImage]}
        resizeMode="cover"
      />
      <PaywallCloseButton
        onPress={() => {
          dispatch(Actions.onBoardingAction.onBoardingSuccess());
        }}
      />
      <View style={[styles.content]}>
        <View
          style={{
            height: verticalScale(220),
          }}>
          <Text style={[styles.headTitle]}>
            <Text style={[styles.textBold]}>PlantApp</Text> Premium
          </Text>
          <Text style={[styles.subTitle]}>Access All Features</Text>

          <PaywallHorizantalSlider style={{paddingLeft: horizontalScale(20)}} />
        </View>

        <View style={{flex: 1, paddingHorizontal: horizontalScale(20)}}>
          <PaywallRadioGroup
            style={{flex: 2}}
            selected={selected}
            onSelected={onSelected}
            items={paywallPaymentData}
          />

          <Button
            label="Try free for 3 days"
            textBold
            style={{marginBottom: 10}}
          />
          <PaywallFooter />
        </View>
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
    flex: 0.6,
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
    flex: 1,
    width: Dimensions.get('window').width,
    height: verticalScale(550),
  },
  textBold: {
    fontWeight: 'bold',
  },
  headTitle: {
    fontSize: verticalScale(30),
    color: 'white',
    paddingLeft: horizontalScale(20),
  },
  subTitle: {
    marginTop: verticalScale(8),
    fontSize: verticalScale(17),
    fontFamily: 'Rubik',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: verticalScale(13),
    paddingLeft: horizontalScale(20),
  },
});

export default PaywallScreen;
