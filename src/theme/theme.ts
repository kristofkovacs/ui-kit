const darkBlue = '#4787D3';
const lightBlue = '#67BCFB';
const almostWhite = '#FBFBFB';

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    darkBlue,
    lightBlue,
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
    gradient: `linear-gradient(306.87deg, ${darkBlue} 0%, ${lightBlue} 100%);`,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    mono: 'Montserrat, monospace',
  },
  shadows: {
    small: '0 0 0px rgba(0, 0, 0, .0)',
    large: '0 0 0px rgba(0, 0, 0, .0)',
  },
  buttons: {
    primary: {
      color: almostWhite,
      backgroundColor: darkBlue,
    },
    secondary: {
      color: darkBlue,
      backgroundColor: almostWhite,
    },
  },
};
