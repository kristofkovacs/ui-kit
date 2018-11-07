import * as React from 'react';
import './App.css';
import { Flex, Card, Image } from 'rebass';
import { Button } from './components/button';
import { ThemeProvider } from 'styled-components';
import { image } from '../src/inputprogram.png';
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
          <Card backgroundImage="https://source.unsplash.com/random/1280x720" width={500}>
            {' '}
            <Button mt={20} variant="secondary">
              Main button on white!
            </Button>{' '}
            <Button mt={20} variant="secondary">
              Main button on white!
            </Button>
          </Card>
          <Image width={300} height={400} src={image} />

          <img src={image} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
