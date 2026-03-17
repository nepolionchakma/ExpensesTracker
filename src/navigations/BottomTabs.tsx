// navigation/BottomTabs.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {Home, Menu} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const Screen1 = () => (
  <View>
    <Text style={{color: 'black'}}>Home Tab</Text>
  </View>
);
const Screen2 = () => (
  <View>
    <Text style={{color: 'black'}}>Profile Tab</Text>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Screen1}
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
        component={Screen2}
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
