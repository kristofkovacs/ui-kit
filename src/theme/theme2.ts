const primary = '#5AE491';
const secondary = '#67BCFB';
const almostWhite = '#FBFBFB';
const gradient = `linear-gradient(306.87deg, ${primary} 0%, #67BCFB 100%)`;
const basic = '0px 7px 15px rgba(71, 135, 211, 0.25)';
const hover = '0px 10.2643px 20.5286px rgba(71, 135, 211, 0.3)';

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    primary: '#5AE491',
    secondary,
    almostBlack: '#101010',
    darkGray: '#595959',
    lightGray: '#9C9C9C',
    veryLightGray: '#F5F5F5',
    almostWhite,
    backgroundBlue: '#F4F9FF',
    lightRed: '#FF2B5E',
    darkRed: '#B90F38',
    lightGreen: '#24EE81',
    darkGreen: '#1EA65D',
    gradient,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    mono: 'Montserrat, monospace',
  },
  shadows: {
    basic,
    hover,
  },
  buttons: {
    boxShadow: basic,
    primary: {
      color: almostWhite,
      background: gradient,
    },
    secondary: {
      color: primary,
      background: almostWhite,
    },
  },
};
