import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/Common/HomeScreen';
import {Text} from 'react-native';
import EmptyScreen from '../screens/Common/EmptyScreen';
import {ROUTES} from '../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TABICONS: any = {
  Orders: 'home',
  Shifts: 'time',
  Earnings: 'cash',
  Support: 'chatbubbles',
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarStyle: {backgroundColor: 'green'},
        tabBarItemStyle: {paddingBottom: 4},
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        tabBarLabel: ({focused, color}) => (
          <Text style={{color}}>{route.name}</Text>
        ),
        tabBarIcon: ({focused, color}) => {
          const iconName = `${TABICONS[route.name]}${
            focused ? '' : '-outline'
          }`;
          return '';
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.DIAGNOSE}
        component={EmptyStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.MYGARDEN}
        component={EmptyStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={EmptyStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="CourierHomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const EmptyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={EmptyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return <TabNavigator />;
};

export default AppStack;
