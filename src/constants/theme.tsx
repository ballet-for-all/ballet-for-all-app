import { Stylesheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').height;

const theme = {
  colors: {
    primary: '#222222',
    secondary: '#bbbbbb',
    thiriary: '#e5e5e5',
    quaternary: '#eeeeee',
    info: '#0066FF',
    white: '#ffffff',
    light: '#f8f9fa',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    txl: 64,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
};

export default theme;
