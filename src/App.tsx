import * as React from 'react';
import { Flex } from 'rebass';
import { Button } from './components/simple/button';
import { NoteCard } from './components/complex/notecard';
import { Notification } from './components/complex/notification';
import { Input } from './components/simple/input';

import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { PopupCard } from './components/complex/popup';

const title = 'Origin of heart murmurs. Diastolic murmurs.';
const abstract =
  'Létfontos szerv: bőr és nyálkahártya nélkül nincs élet (ld. súlyos égést követő állapotok, Lyell szindróma)! Létfontos szerv: bőr és nyálkahártya nélkül nincs élet (ld. súlyos égést követő állapotok, Lyell szindróma)!';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={100}>
          <Button variant="primary" label="Main button on blue!" />
          <Button mt={20} variant="secondary" label="Main button on blue!" />

          <Flex mt={50}>
            <NoteCard title={title} abstract={abstract} date={Date.now()} likes={32} />
          </Flex>
          <Flex mt={50}>
            <Notification text="This nofitication contains any further information." />
          </Flex>
          <Flex mt={50}>
            <PopupCard text="This nofitication contains any further information." />
          </Flex>
          <Flex mt={50}>
            <Button variant="primary" icon="like" iconColor="white" label={'Like'} />
            <Button ml={25} variant="primary" icon="twitter" iconColor="white" reversed label={'Twitter'} />
            <Button ml={25} variant="secondary" icon="facebook" iconColor="primary" reversed />
          </Flex>
          <Flex mt={50}>
            <Input label="E-mail address" placeholder="your@mail.com" />
          </Flex>
          <Flex mt={20}>
            <Input type="password" label="Password" placeholder="password" />
          </Flex>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
