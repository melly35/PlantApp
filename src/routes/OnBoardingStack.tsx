import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/Onboarding';

export type OnboardingStackParamList = {
  Onboarding: undefined; // undefined means routes doesn't have params
  OnboardingSuccessScreen: undefined;
  OnboardingOtpScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};
