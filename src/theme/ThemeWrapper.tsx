import * as React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './theme2';

injectGlobal`
body {
  font-family: ${theme.fonts.mono};  
}
`;

export default class ThemeWrapper extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
