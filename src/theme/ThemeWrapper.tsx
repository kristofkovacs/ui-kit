import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default class ThemeWrapper extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
