// navigation/DrawerNavigator.tsx

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

const SettingsScreen = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        lazy: true,
        drawerStyle: styles.drawer,
      }}>
      {/* Bottom Tabs inside Drawer */}
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{title: 'Home', headerShown: false}}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
});
