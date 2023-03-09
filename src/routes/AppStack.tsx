import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text} from 'react-native';
import EmptyScreen from '../screens/Common/EmptyScreen';
import {ROUTES} from '../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Common/HomeScreen';
import {BottomBarIcon} from '../components/BottomBarIcon';
import WebViewScreen from '../screens/Common/WebViewScreen';
import {BottomBarMidButton} from '../components/BottomBarMidButton';
import {verticalScale} from '../utils/metrics';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TITLE: any = {
  home: 'Home',
  diagnose: 'Diagnose',
  garden: 'My Garden',
  profile: 'Profile',
};

const TABICONS: any = {
  home: require('../../assets/icons/home.png'),
  diagnose: require('../../assets/icons/diagnose.png'),
  garden: require('../../assets/icons/garden.png'),
  profile: require('../../assets/icons/profile.png'),
};

const TABFOCUSICONS: any = {
  home: require('../../assets/icons/home_active.png'),
  diagnose: require('../../assets/icons/diagnose.png'),
  garden: require('../../assets/icons/garden.png'),
  profile: require('../../assets/icons/profile.png'),
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarItemStyle: {paddingBottom: 4},
        tabBarActiveTintColor: '#28AF6E',
        tabBarStyle: {marginTop: verticalScale(4)},
        tabBarLabel: ({focused, color}) => (
          <Text style={{fontSize: verticalScale(10), color}}>
            {TITLE[route.name]}
          </Text>
        ),
        tabBarIcon: ({focused, color}) => {
          return (
            <BottomBarIcon
              imageSource={
                focused ? TABFOCUSICONS[route.name] : TABICONS[route.name]
              }
            />
          );
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
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name={'empty'}
        component={EmptyStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => <BottomBarMidButton />,
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.MYGARDEN}
        component={EmptyStack}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={EmptyStack}
        options={{headerShown: false}}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{headerShown: true}}
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
