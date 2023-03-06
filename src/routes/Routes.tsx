import React, {useEffect} from 'react';
import {Appearance, StatusBar, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {Loading} from '../components/Loading';
import AppStack from './AppStack';
import SplashScreen from 'react-native-splash-screen';
import {OnboardingStack} from './OnBoardingStack';
import {useSelector} from 'react-redux';
import {StackType} from '../utils/enums';

const loading = false;

export const Router = () => {
  const stack = useSelector(state => state.stack);
  const scheme = useColorScheme();
  useEffect(() => {
    // SplashScreen.hide();
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar />
      {stack === StackType.App && <AppStack />}
      {stack === StackType.Onboarding && <OnboardingStack />}
    </NavigationContainer>
  );
};
