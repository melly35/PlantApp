import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/Onboarding';
import {OnboardingSlideScreen} from '../screens/Onboarding/OnboardingSlide';
import OnboardingPaywallScreen from '../screens/Onboarding/OnboardingPaywallScreen';

export type OnboardingStackParamList = {
  Onboarding: undefined; // undefined means routes doesn't have params
  OnboardingSlide: undefined;
  OnboardingPaywallScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingSlide"
        component={OnboardingSlideScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingPaywallScreen"
        component={OnboardingPaywallScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
