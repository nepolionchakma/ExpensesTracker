import {UserCircle} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import CustomContainer from '../../components/CustomContainer';
const HomeScreen = () => {
  const theme = useTheme();
  const drawerNav = useNavigation<any>();

  return (
    <CustomContainer>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={drawerNav.toggleDrawer}
          style={styles.drawerIcon}>
          <UserCircle size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>Welcome to, TemplateV79</Text>
      </View>
    </CustomContainer>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    // position: 'absolute',
    // top: 10,
    // left: 10,
  },
});
