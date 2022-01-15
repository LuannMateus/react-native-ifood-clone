import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

import Principal from '../Principal';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Principal') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Feather name={iconName || ''} size={size} color={color} />;
        },
      })}
      defaultScreenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
