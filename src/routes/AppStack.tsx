import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text} from 'react-native';
import EmptyScreen from '../screens/Common/EmptyScreen';
import {ROUTES} from '../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Common/HomeScreen';
import {BottomBarIcon} from '../components/BottomBarIcon';

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
        tabBarLabel: ({focused, color}) => (
          <Text style={{color}}>{TITLE[route.name]}</Text>
        ),
        tabBarIcon: ({focused, color}) => {
          const iconName = `${TITLE[route.name]}${focused ? '' : '-outline'}`;
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
      />
      <Tab.Screen
        name={'empty'}
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
          name="HomeScreen"
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
