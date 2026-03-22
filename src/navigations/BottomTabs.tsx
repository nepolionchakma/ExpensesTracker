import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Menu} from 'lucide-react-native';
import HomeScreen from '../modules/Home/Home';
import ProfileScreen from '../modules/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarStyle: {},
          tabBarLabelStyle: {
            display: 'none',
            height: 0,
            width: 0,
          },
          tabBarIcon: ({focused}) => (
            <Home color={focused ? 'blue' : 'black'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarLabelStyle: {
            display: 'none',
            height: 0,
            width: 0,
          },
          tabBarIcon: ({focused}) => (
            <Menu color={focused ? 'blue' : 'black'} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
