import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/Onboarding';
import PaywallScreen from '../screens/Paywall';

export type OnboardingStackParamList = {
  Onboarding: undefined; // undefined means routes doesn't have params
  OnboardingSlide: undefined;
  PaywallScreen: undefined;
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
        name="PaywallScreen"
        component={PaywallScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
