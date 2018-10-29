import * as React from 'react';
import './App.css';
import { Flex } from 'rebass';
import Button from './components/button';
import theme from './theme/theme';

class App extends React.Component {
  public render() {
    return (
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={100}>
        <Button theme={theme} disabled>
          Main button on white!
        </Button>
      </Flex>
    );
  }
}

export default App;
