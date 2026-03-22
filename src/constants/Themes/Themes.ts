import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import {COLORS} from './AppTheme';

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: COLORS.darkBG, //background
    onBackground: COLORS.darkOnBG,
    primary: COLORS.primary, //primary color green
    surface: COLORS.darkTitle, //text color
    secondary: COLORS.secondaryDarkButton, //secondaryDarkButton
    blue: COLORS.blue,
    amber: COLORS.darkAmber,
  },
};

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: COLORS.lightBG, //background
    onBackground: COLORS.lightOnBG,
    primary: COLORS.primary, //primary color green
    surface: COLORS.lightTitle, //text color
    secondary: COLORS.secondaryLightButton, //secondaryLightButton
    blue: COLORS.blue,
    amber: COLORS.lightAmber,
  },
};

export {customDarkTheme, customLightTheme};
