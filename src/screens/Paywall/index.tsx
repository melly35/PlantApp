import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {CustomIcon} from '../../components/CustomIcon';
import {
  PaywallHorizantalSlide,
  PaywallHorizantalSlider,
} from '../../components/Paywall/HorizantalSlider';
import {PaywallRadioGroup} from '../../components/Paywall/RadioGroup';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import paywallPaymentData from '../../utils/paywallPaymentData';
import {PaywallPaymentItemProps} from '../../utils/props';
import {ScannerIcon} from '../../utils/svg/general';

const PaywallScreen = () => {
  const [selected, setSelected] = useState<PaywallPaymentItemProps>();
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
      <View style={[styles.content]}>
        <View
          style={{
            paddingLeft: horizontalScale(20),
            flex: 1,
          }}>
          <Text style={[styles.headTitle]}>
            <Text style={[styles.textBold]}>PlantApp</Text> Premium
          </Text>
          <Text style={[styles.subTitle]}>Access All Features</Text>

          <PaywallHorizantalSlider />
        </View>
        <View style={{flex: 1, paddingHorizontal: horizontalScale(20)}}>
          <PaywallRadioGroup
            selected={selected}
            onSelected={onSelected}
            items={paywallPaymentData}
          />

          <View style={[{flex: 1}]}>
            <Button label="Try free for 3 days" textBold />
          </View>
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
    borderWidth: 1,
    borderColor: 'white',
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
  },
  subTitle: {
    marginTop: verticalScale(8),
    fontSize: verticalScale(17),
    fontFamily: 'Rubik',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 10,
  },
});

export default PaywallScreen;
