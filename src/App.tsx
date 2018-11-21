import * as React from 'react';
import './App.css';
import { Flex, Image } from 'rebass';
import { Button } from './components/button';
import { NoteCard } from './components/card';

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
          <Flex mt={50}>
            <NoteCard />
          </Flex>
          <Image width={200} height={200} src="http://pngimg.com/uploads/google/google_PNG19644.png" />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
