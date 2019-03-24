import * as React from 'react';
import './App.css';
import { Flex, Image } from 'rebass';
import { Button } from './components/button';
import { NoteCard } from './components/card';
import { Notification } from './components/notification';

import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

const title = 'Origin of heart murmurs. Diastolic murmurs.';
const abstract =
  'Létfontos szerv: bőr és nyálkahártya nélkül nincs élet (ld. súlyos égést követő állapotok, Lyell szindróma)!';

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
            <NoteCard title={title} abstract={abstract} date={Date.now()} likes={32} />
          </Flex>
          <Flex mt={50}>
            <Notification text="This nofitication contains any further information." />
          </Flex>
          <Image width={200} height={200} src="http://pngimg.com/uploads/google/google_PNG19644.png" />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
