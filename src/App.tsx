import * as React from 'react';
import './App.css';
import { Flex, Card } from 'rebass';
import { Button } from './components/button';
import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={100}>
          <Button variant="primary">Main button on blue!</Button>
          <Button mt={20} variant="secondary">
            Main button on white!
          </Button>
          <Card backgroundImage="https://source.unsplash.com/random/1280x720" width={200} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
