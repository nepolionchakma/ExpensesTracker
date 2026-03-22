import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const SIZES = {
  h1: 24,
  h2: 20,
  h3: 18,
  p1: 16,
  p2: 14,
  p3: 10,
  p4: 12,
  width,
  height,
};
export const COLORS = {
  primary: '#009CDE',
  darkBG: '#121E44',
  darkOnBG: '#FFFFFF',
  darkTitle: '#FFFFFF',
  secondaryDarkButton: '#2E90FA',
  darkSurface: '#1C1C1E',
  darkAmber: '#FFC014',

  lightBG: '#ffffff',
  lightOnBG: '#f0f2f3',
  lightTitle: '#242d35',
  secondaryLightButton: '#1c4bf9',
  lightSurface: '#F2F2F7',
  lightAmber: '#FFC014',

  // colors
  black: '#000000',
  white: '#FFFFFF',
  primaryRed: '#FB1A20',
  red: '#E61C53',
  redish: '#FF5C58',
  sayn: '#40BDFF',
  blue: '#4D5AFF',
  messageColor: '#707BFF',
  yellow: '#FFC014',
  orange: '#FF7821',
  green: '#7DD63C',
  successColor: '#0BA503',
  lightYellow: '#FFCC00',
  lightBlue: '#EAEDFF',
  lightBlack: '#7A7A7A',
  lightRed: '#EE5C51',
  blackish: '#111111DE',
  sunColor: '#F2C800',
  maroon: '#B54896',
  whitesmoke: 'whitesmoke',
  // cancel: '#FF4842',
  darkBlue: '#1084F1',
  warning: '#F78C12',

  //other colors
  deepWhite: '#E5F0FC',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lightGray5: '#cccccc',
  lightGray6: '#BCC1CD',
  lightGray7: '#F2F2F7',
  transparent: 'transparent',
  transparentGray: '#00000066',
  darkgray: '#898C95',
  deepGray: '#637381',
  textGray: '#6F7D8A',
  textColor: '#7F7F7F',
  softGray: '#dcdcf2',

  lightPrimary2: '#E4F8DD',
  mixBlack: '#3B4964',
  modalUnderBgColor: '#121E4499',
  disabled: '#63636333',
  //transparent colors
  black40: 'rgba(0, 0, 0, 0.4)',
  transparentBlack: 'rgba(0, 0, 0, 0.6)',
  transparentText: 'rgba(0, 0, 0, 0.75)',
  transparentDark: 'rgba(0, 0, 0, 0.5)',
  transparentWhite: 'rgba(255, 255, 255, 0.750)',
  borderBottom: '#E1E1E1',
  transparentImgTxt: 'rgba(0, 0, 0, 0.3)',
  transparentDark2: 'rgba(0, 0, 0, 0.4)',

  //bottmtab icon colors
  transparentPrimary: 'rgb(0, 178, 0, 0.5)',

  //active color
  activeBackground: 'rgba(0, 156, 222, 0.1)',
  activeText: '#009CDE',
  cancel: '#FF696C',

  //calendar
  late: '#EAAA08',
  absent: '#D92D20',
  offDay: '#D0D5DD',
  movement: '#2E90FA',
  holiday: '#717BBC',
  leave: '#D444F1',
  present: '#86efac',
};

const appTheme = {COLORS, SIZES};

export default appTheme;
