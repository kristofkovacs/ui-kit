import * as React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './theme';

injectGlobal`
body {
  font-family: ${theme.fonts.mono};  
}
`;

export default class ThemeWrapper extends React.Component {
  render() {
    return (
      <div>
        <button>ffffffff</button>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </div>
    );
  }
}
