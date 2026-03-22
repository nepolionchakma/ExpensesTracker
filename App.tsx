import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigations/Drawer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {RootState, store} from './src/Redux/Store/Store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {customDarkTheme, customLightTheme} from './src/constants/Themes/Themes';
import {useCallback, useEffect} from 'react';
import {Linking, StyleSheet, useColorScheme} from 'react-native';
import {setTheme} from './src/Redux/Slices/ThemeSlice';

const linking: LinkingOptions<any> = {
  prefixes: [
    /* your linking prefixes */
    // 'https://abc.com',
    // 'ABC://',
  ],
  config: {
    /* configuration for matching screens with paths */
    initialRouteName: 'Loader',
    screens: {
      Home: '',
      Profile: 'profile',
      Register: 'register',
    },
  },
};

const AppContent = () => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  // const navigation = useNavigation<RootStackNavigationProp>();
  const selectedTheme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (!selectedTheme) {
      dispatch(setTheme(colorScheme === 'dark' ? 'dark' : 'light'));
    }
  }, [selectedTheme, colorScheme, dispatch]);

  const theme = selectedTheme === 'dark' ? customDarkTheme : customLightTheme;

  const onReady = useCallback(async () => {
    try {
      const uri = await Linking.getInitialURL();
      if (uri) {
        // await delay(200);
        // await BootSplash.hide({fade: true});
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer linking={linking} onReady={onReady}>
            <DrawerNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
