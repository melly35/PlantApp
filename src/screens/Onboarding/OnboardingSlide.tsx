import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../components/Button';
import {PaginationDot} from '../../components/PaginationDot';
import {verticalScale} from '../../utils/metrics';
import slides from '../../utils/slides';
import useRefState from '../../utils/use-ref-state';
import {OnboardingItem} from './OnboardingItem';

export const OnboardingSlideScreen = ({navigation}) => {
  const flatListRef = React.useRef<FlatList>();
  const [currentIndex, currentIndexRef, setCurrentIndex] = useRefState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.round(xPos / totalWidth);
    setCurrentIndex(current);
    // let yOffset = event.nativeEvent.contentOffset.y;
    // let contentHeight = event.nativeEvent.contentSize.height;
    // let value = yOffset / contentHeight;
  };

  const goNextSlide = () => {
    console.log('goNextSlide', slides.length, currentIndexRef.current);
    if (slides.length - 1 === currentIndexRef.current) {
      navigation.navigate('OnboardingPaywallScreen');
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
        <Button label="Continue" textBold onPress={() => goNextSlide()} />
        <PaginationDot activeIndex={currentIndex} items={slides} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.82,
  },
  actionContainer: {
    flex: 0.18,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ccc',
  },
});
