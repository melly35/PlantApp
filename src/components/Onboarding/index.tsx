import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Button} from '../Button';
import {PaginationDot} from '../PaginationDot';
import slides from '../../utils/slides';
import useRefState from '../../utils/use-ref-state';
import {OnboardingItem} from './onboarding.item';
import {SlidePrivacyFooter} from './onboarding.footer';
import {horizontalScale, verticalScale} from '../../utils/metrics';

export const OnboardingSlideScreen = ({navigation}) => {
  const flatListRef = React.useRef<FlatList>();
  const [currentIndex, currentIndexRef, setCurrentIndex] = useRefState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.round(xPos / totalWidth);
    setCurrentIndex(current);
  };

  const goNextSlide = () => {
    if (slides.length - 1 === currentIndexRef.current) {
      navigation.navigate('PaywallScreen');
    }

    const nextIndex =
      slides.length - 1 > currentIndexRef.current
        ? currentIndexRef.current + 1
        : 0;

    flatListRef?.current.scrollToIndex({
      index: nextIndex,
      animated: true,
    });

    setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 200);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        ref={flatListRef}
        style={[styles.imageContainer]}
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEnabled={false}
        snapToAlignment="center"
      />
      <View style={[styles.actionContainer]}>
        <Button
          label={currentIndex === 0 ? 'Get Started' : 'Continue'}
          textBold
          onPress={() => goNextSlide()}
          style={{
            width: horizontalScale(327),
            height: verticalScale(56),
          }}
        />
        {currentIndex === 0 ? (
          <SlidePrivacyFooter />
        ) : (
          <PaginationDot activeIndex={currentIndex} items={slides} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.8,
  },
  actionContainer: {
    flex: 0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ccc',
  },
});
